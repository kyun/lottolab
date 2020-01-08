import AWS from 'aws-sdk';
import { APIGatewayProxyHandler } from 'aws-lambda';
import axios from 'axios';
import moment from 'moment-timezone';
import 'source-map-support/register';

const DYNAMO_DB = new AWS.DynamoDB.DocumentClient();
const LOTTO_URL = 'http://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo=';

export const updateNumber: APIGatewayProxyHandler = async (event) => {
  try {
    const { no } = event?.queryStringParameters ?? { no: null };
    const now = moment().tz('Asia/Seoul');
    console.log(`queryStringParameter is ${no}`);

    const { data } = await axios.get(`${LOTTO_URL}${no}`).catch((e) => { throw e; });
    const price = Number(no) < 88 ? 2000 : 1000;
    const params = {
      TableName: 'lotto_numbers',
      Item: {
        no,
        price,
        year: moment(data.drwNoDate).format('YYYY'),
        month: moment(data.drwNoDate).format('MM'),
        total: data.totSellamnt / price,
        createdAt: now.format('YYYY-MM-DD HH:mm:ss.SSS'),
        timestamp: now.unix(),
        ...data,
      },
      Expected: {
        no: {
          Exists: false,
        },
      },
    };
    const res: any = await DYNAMO_DB.put(params).promise().catch((e) => { throw e; });
    return {
      statusCode: 200,
      body: JSON.stringify({
        no,
        res,
        requestedAt: now,
      }, null, 2),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        ...e,
        message: e.message,
      }),
    };
  }
};

export const updateBot: APIGatewayProxyHandler = async (event: any) => {
  try {
    const now = moment().tz("Asia/Seoul");
    const start = moment("2002-12-02");
    const no = ~~(moment.duration(now.diff(start)).asWeeks()) + 1;
    const { data } = await axios.get(`${LOTTO_URL}${no}`).catch((e)=>{ throw e; });
    if (data.returnValue !== "success" || data.totSellamnt === 0) {
      throw { message: `${now.format('YYYY-MM-DD HH:mm:ss')}::Fail to get ${no}th winning numbers` }
    }
    const price = no < 88 ? 2000 : 1000;
    const params = {
      TableName: "lotto_numbers",
      Item: {
        no: no,
        price: price,
        year: moment(data.drwNoDate).format("YYYY"),
        month: moment(data.drwNoDate).format("MM"),
        total: data.totSellamnt / price,
        createdAt: now.format("YYYY-MM-DD HH:mm:ss"),
        timestamp: now.unix(),
        ...data
      },
      Expected: {
        "no": {
          "Exists": false
        }
      }
    }
    const res: any = await DYNAMO_DB.put(params).promise().catch((e)=>{ throw e; });
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
