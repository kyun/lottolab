import React from 'react';
import * as Recharts from 'recharts';

const {LineChart, Line, ResponsiveContainer} = Recharts;
const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
const LottoItem:React.FC<any> = () => {
  
  return (
    <div className="LottoItem">
      <div className="head">
        <span className="name"><b>893</b> 회차 당첨번호</span>
        <span>2020년 01월 12일</span>
      </div>
      <div className="content">
        <div>
          <div className={`LottoBall`}>
            <span>1</span>
          </div>
          <div className={`LottoBall`}>
            <span>1</span>
          </div>
          <div className={`LottoBall`}>
            <span>1</span>
          </div>
          <div className={`LottoBall`}>
            <span>1</span>
          </div>
          <div className={`LottoBall`}>
            <span>1</span>
          </div>
          <div className={`LottoBall`}>
            <span>1</span>
          </div>
          <div className={`LottoBall --bonus`}>
            <span>1</span>
          </div>
        </div>
      </div>
      <div className="foot">
        

        <div className="box">
          <div className="chart-wrap">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Line type='monotone' dot={false} dataKey='pv' stroke='rgba(255, 78, 120,0.7)' strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <span className="value">234억 1234만원</span>
          <span className="label">1등 당첨금</span>
        </div>
        <div className="box">
        <div className="chart-wrap">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Line type='monotone' dot={false} dataKey='pv' stroke='rgba(255, 78, 120,0.7)' strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <span className="value">1234만 1234게임</span>
          <span className="label">판매량</span>
        </div>
        <div className="box">
        <span className="value">7명</span>
        <span className="label">1등 당첨자</span>
        </div>
      </div>
      <style jsx>{`
        .LottoItem{
          //background: rgba(255,255,255,0.1);
          //height: 200px;
          border-bottom: 2px solid #49668A;
        }
        .LottoItem + .LottoItem{
          margin-top: 8px;
        }
        .head{
          color: white;
          font-size: 10pt;
          padding: 8px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
          padding-top: 12px;
        }
        .head > .name{
          font-size: 14pt;
        }
        .content{
          text-align: center;
          margin-bottom: 16px;
        }

        .LottoBall{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: red;
          border-radius:3px;
          font-size: 14pt;
          font-weight: bold;
          color: white;
        }
        
        .LottoBall + .LottoBall{
          margin-left: 4px;
        }
        .LottoBall + .LottoBall.--bonus{
          margin-left: 16px;
        }

        .foot{
          position: relative;
          display: flex;

        }
        .foot > .box > .chart-wrap{
          z-index: 0;
          width: calc(100%);
          height: 100%;
          position: absolute;
          left: 0;
          top:0;
        }
        .foot > .box{
          background: rgba(255,255,255,0.05);
          position: relative;
          z-index: 1;
          display: inline-flex;
          flex-direction: column;
          flex: 1 0 0;
          text-align: center;
          padding-bottom: 16px;
          padding-top: 16px;
        }
        .foot > .box > .value{
          z-index: 1;
          color: #83E4F1;
          margin-bottom: 4px;
          font-weight: bold;
        }
        .foot > .box > .label{
          color: #fff;
          font-size: 0.9em;
          z-index: 1;
        }
      `}</style>
    </div>
  )
};
export default LottoItem;