import React from 'react';

const Header:React.FC<any> = () => {
  return(
    <header>
      <div>

      </div>
      <h1>
        <span style={{color: "#FF4E78"}}>Lotto</span>
        <span style={{color: "#83E4F1"}}>lab</span>.io</h1>
      <div>

      </div>
      <style jsx>{`
        header{
          max-width: 768px;
          width: 100%;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 56px;
          box-sizing: border-box;
          border-bottom: 2px solid rgba(131, 228, 241, 0.2);
        }
        header > h1 {
          font-family: 'Gugi', cursive;
          color: white;
          //font-style: italic;
          font-weight: 400;
          font-size: 20pt;
        }
      `}</style>
    </header>
  )
}
export default Header;