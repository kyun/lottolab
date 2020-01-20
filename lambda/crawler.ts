import got from 'got';
import { APIGatewayProxyHandler } from 'aws-lambda';

export const crawler: APIGatewayProxyHandler = async (evt) => {
  try{
    const data = await got('https://dhlottery.co.kr/store.do?method=topStore&pageGubun=L645');
    console.log(data.body);
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify({
        body: data.body
      }),
    }
  } catch (e) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify({
        ...e,
        message: e.message,
      }),
    };
  }
}

