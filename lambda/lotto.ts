import AWS from "aws-sdk";
import { APIGatewayProxyHandler } from 'aws-lambda';
import axios from "axios";
import moment from "moment-timezone";
import 'source-map-support/register';

const DYNAMO_DB = new AWS.DynamoDB.DocumentClient();
const LOTTO_URL = "http://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo=";


export const updateNumber: APIGatewayProxyHandler = async (event) => {
  try {
    let now = moment().tz("Asia/Seoul");
    const { no = '1' } = event.queryStringParameters;
    console.log(`queryStringParameter is ${no}`);
    const { data } = await axios.get(`${LOTTO_URL}${no}`);
    if (data.returnValue !== "success" || data.totSellamnt === 0) {
      throw { message: `${now.format('YYYY-MM-DD HH:mm:ss')}::Fail to get ${no}th winning numbers` }
    }
    return {
      statusCode: 200,
      body: JSON.stringify({
        ...data,
        requestedAt: now
      }, null, 2),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        ...e,
        message: e.message
      })
    }
  }
}

export const updateBot: APIGatewayProxyHandler = async (event: any) => {
  try {
    let now = moment().tz("Asia/Seoul");
    let start = moment("2002-12-02");
    let no = ~~(moment.duration(now.diff(start)).asWeeks()) + 1;
    const { data } = await axios.get(`${LOTTO_URL}${no}`);
    if (data.returnValue !== "success" || data.totSellamnt === 0) {
      throw { message: `${now.format('YYYY-MM-DD HH:mm:ss')}::Fail to get ${no}th winning numbers` }
    }
    const price = no < 88 ? 2000 : 1000;
    const params = {
      TableName: "lottolab",
      Item: {
        id: 1 + "",
        price: price,
        year: moment(data.drwNoDate).format("YYYY"),
        month: moment(data.drwNoDate).format("MM"),
        total: data.totSellamnt / price,
        createdAt: moment().tz("Asia/Seoul").format("YYYY-MM-DD HH:mm:ss"),
        ...data
      },
      Expected: {
        "id": {
          "Exists": false
        }
      }
    }
    const res: any = await DYNAMO_DB.put(params, (err, res) => {
      if (err) {
        console.log("_!@+@!@#!@#+!@#+!@");
        console.log(JSON.stringify(err));
        console.log('db error');
        return {
          statusCode: 500,
          body: JSON.stringify({ ...err, message: 'while put data to db' })
        }
      }
      console.log(res);
      return res;
    }).promise();
    console.log(res);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'success',
        res: { ...res }
      })
    }
  } catch (e) {
    console.log("_!@+@!@#!@#+!@#+!@");
    console.log(JSON.stringify(e));
    return {
      statusCode: 500,
      body: JSON.stringify({
        ...e,
        msg: 'errror'
      })
    }
  }

};
