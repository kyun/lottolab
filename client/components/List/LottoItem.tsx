import React from 'react';

const LottoItem:React.FC<any> = () => {
  
  return (
    <div className="LottoItem">
      <div className="head">
        <span>893회차 당첨번호</span>
        <span>2020년 01월 12일</span>
      </div>
      <style jsx>{`
        .LottoItem{
          background: rgba(255,255,255,0.1);
          height: 200px;
        }
        .head{
          color: white;
          font-size: 10pt;
          padding: 8px 16px;
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </div>
  )
};
export default LottoItem;