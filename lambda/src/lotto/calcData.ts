// import AWS from 'aws-sdk';
import { APIGatewayProxyHandler } from 'aws-lambda';
import moment from 'moment-timezone';

/*
  winAmountRank: {
  }
*/
/*
  winAmount: {
    rank: [ 230, 123, 22, 12, 42, ... ],
    charts: {
      2019: {
        1: {
          total: 123,
          no: 123

        },
        2: 1,
        3: 1,
        ...
        11: 1,
        12: 1,
      },
      ...
      2002: {
        1: 1,
        2: 1,
        ...
        11: 1,
        12: 1,
      }
    }
    avg: 1,
    max: 1,
    max_no: 1,
    min: 1,
    min_no: 1,
    total: 1,
  },
  sellAmount: {
    rank: [ 230, 123, 22, 12, 42, ... ],
    charts: {
      2019: {
        1: 1,
        2: 1,
        3: 1,
        ...
        11: 1,
        12: 1,
      }
    },
    avg: 1,
    max: 1,
    max_no: 1,
    min: 1,
    min_no: 1,
    total: 1,
  },
  winCount: {
    rank: [ 230, 123, 22, 12, 42, ... ],
    charts: {
      2019: {
        1: 1,
        2: 1,
        3: 1,
        ...
        11: 1,
        12: 1,
      }
    },
    avg: 1,
    max: 1,
    max_no: 1,
    min: 1,
    min_no: 1,
    total: 1,
  },
  numCount: {
    weeks: { // 어레이말고.. 다른거..
      892: [1, 4, 11, 25, 29, 42, 24],
      891: [3, 4, 25, 35, 44, 45, 12],
      ...
      1: [2, 3, 4, 12, 42, 43, 13]
    },
    years: {
      2020: {
        1: 34,
        2: 56,
        ...
        44: 12,
        45: 22
      },
      ...
      2002: {
        1: 34,
        2: 56,
        ...
        44: 12,
        45: 22
      }
    },
    total: {
        1: 34,
        2: 56,
        ...
        44: 12,
        45: 22
    }

  }
*/

export const calcData: APIGatewayProxyHandler = async (event) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
        input: event,
        requestAt: moment.tz('Asia/Seoul'),
      }, null, 2),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        ...e,
      }),
    };
  }
};
