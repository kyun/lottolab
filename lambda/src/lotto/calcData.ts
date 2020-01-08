import AWS from 'aws-sdk';
import { APIGatewayProxyHandler } from 'aws-lambda';
import moment from 'moment-timezone';

const DYNAMO_DB = new AWS.DynamoDB.DocumentClient();

const calcData: APIGatewayProxyHandler = async (event) => {

  function getData() {
    return '';
  }
  try {
    const { no } = event?.queryStringParameters ?? { no: null };
    const now = moment().tz('Asia/Seoul');
    console.log(`queryStringParameter is ${no} at ${now}`);

    return {
      statusCode: 200,
      body: JSON.stringify({

      }, null, 2),
    };c
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        ...e,
      }),
    };
  }
};
export default calcData;
