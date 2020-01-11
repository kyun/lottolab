import React from 'react';

const Tabbar:React.FC<any> = () => {
  
  return(
    <div className="Tabbar">
      <div className={`Tab --active`}>
        <span>회차</span>
      </div>
      <div className={`Tab `}>
        <span>Tab 2</span>
      </div>
      <div className={`Tab `}>
        <span>Tab 3</span>
      </div>
      <style jsx>{`
        .Tabbar{
          font-family: 'Noto Sans KR', sans-serif;

          max-width: 768px;
          width: 100%;
          margin: auto;

          display: flex;
          height: 36px;
          align-items: center;
          align-content: stretch;
          box-sizing: border-box;
          //border-bottom: 2px solid rgba(131, 228, 241, 0.2);
        }
        .Tab{
          flex: 1 0 0 ;
          display: flex;
          align-self: stretch;
          justify-content: center;
          align-items: center;
          //background: rgba(255,255,255,0.1);
          color: white;
          border-bottom: 2px solid rgba(255,255,255, 0.1);

        }
        .Tab.--active{
          font-weight: medium;
          color: #83E4F1;
          border-bottom: 2px solid rgba(131, 228, 241, 1);
        }
      `}</style>
    </div>
  )
}
export default Tabbar;