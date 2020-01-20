import * as React from 'react';
import Layout from '../components/Layout';
import { NextPage } from 'next';
import ReactFullpage from '@fullpage/react-fullpage';
import moment from 'moment';
import axios from 'axios';

function useInterval(callback: any, delay: any) {
  const savedCallback: any = React.useRef();
  React.useEffect(() => {
    savedCallback.current = callback;
  });
  React.useEffect(() => {
    function tick() { savedCallback.current(); };
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    };
  }, [delay]);
};


const TimerSection: React.FC<any> = () => {
  const [timer, setTimer] = React.useState(1);
  useInterval(() => {
    setTimer(timer + 1);
  }, timer > 0 ? 1 : null);
  const Duration = moment.duration(moment().diff(moment('2002-12-07')));
  return (
    <div className="section">
      <h1 style={{ color: 'white', fontSize: '24pt', fontWeight: 'bold', fontStyle: 'italic'}}>
        <span style={{ position: 'relative'}}>
        {Duration.years()}<span style={{fontSize: '14pt'}}>년 </span>
        {Duration.months()}<span style={{fontSize: '14pt'}}>월 </span>
        {Duration.days()}<span style={{fontSize: '14pt'}}>일 </span>
        {Duration.hours()}<span style={{fontSize: '14pt'}}>시간 </span>
        {Duration.minutes()}<span style={{fontSize: '14pt'}}>분 </span>
        {Duration.seconds().toString().padStart(2,'0')}.
        <span style={{fontSize: '14pt'}}>{Duration.milliseconds().toString().padStart(3,'0')}</span>
        <span style={{fontSize: '14pt'}}>초 </span>
          <span style={{position: 'absolute', right: 0, bottom: '100%', fontSize: '10pt'}}>
            <span  style={{color: '#83E4F1'}}>1회 추첨 (2002-12-07) 으로 부터</span>
          </span>
          <span style={{position: 'absolute', left: 0, top: '100%', fontSize: '10pt'}}>
            <span  style={{color: '#83E4F1'}}>지나는 중</span>
          </span>
        </span>
      </h1>
      <style jsx>{`
        .section{
          text-align: center;
        }

      `}</style>
    </div>
  );
};

const TotalAmountSection: React.FC<any> = ({tot, no}) => {

  const TOT = React.useMemo(() => {
    return tot.toString().match(/.{1,4}(?=(?:.{4})*$)/g);
  }, [tot]);
  const AVG:any = React.useMemo(() => {
    return (tot / no).toFixed(0).match(/.{1,4}(?=(?:.{4})*$)/g);
  }, [tot]);
  console.log(TOT);
  return (
    <div className="section">
      <h1 style={{ color: 'white', fontSize: '24pt', fontWeight: 'bold', fontStyle: 'italic'}}>
        <span style={{ position: 'relative'}}>
          {TOT[0]}<span style={{fontSize: '14pt'}}>조 </span>
          {TOT[1]}<span style={{fontSize: '14pt'}}>억 </span>
          {TOT[2]}<span style={{fontSize: '14pt'}}>만 </span>
          {TOT[3]}<span style={{fontSize: '14pt'}}>원 </span>
          <span style={{position: 'absolute', right: 0, bottom: '100%', fontSize: '10pt'}}>
            <span  style={{color: '#83E4F1'}}>누적 총 판매 금액</span>
          </span>
          <span style={{position: 'absolute', left: 0, top: '100%', fontSize: '10pt', fontWeight: 'normal' }}>
            <span  style={{color: '#e0e0e0'}}>* 회당 평균
              <span style={{color: '#FF4E78', fontWeight: 'bold'}}> {AVG[0]}억 {AVG[1]}만 {AVG[2]}원</span> 
              판매
            </span>
          </span>
        </span>
      </h1>
      <style jsx>{`
        .section{
          text-align: center;
        }

      `}</style>
    </div>
  );
};

const TopSellAmountSection:React.FC<any> = ({top, avg}) => {
  console.log(top);
  console.log(avg);
  return (
    <div className="section">
      <h1 style={{ color: 'white', fontSize: '24pt', fontWeight: 'bold', fontStyle: 'italic'}}>
        <span style={{ position: 'relative'}}>
            {top.no} 회차
          {/* <span style={{fontWeight: 500, fontSize: '14pt', color: '#e0e0e0'}}> (2009-12-01)</span> */}
  <span style={{fontWeight: 500, fontSize: '14pt', color: '#fff'}}> ({top.total} 게임)</span>
          <span style={{position: 'absolute', right: 0, bottom: '100%', fontSize: '10pt'}}>
            <span  style={{color: '#83E4F1'}}>가장 많이 팔렸던 회차는..</span>
          </span>
          <span style={{position: 'absolute', left: 0, top: '100%', fontSize: '10pt', fontWeight: 'normal', textAlign: 'left' }}>
            <span  style={{color: '#e0e0e0'}}>* 평균 판매량 대비 
  <span style={{color: '#FF4E78', fontSize: '12pt', fontWeight: 'bold'}}> {(top.total / avg * 100).toFixed(2)}% ⬆</span>
            </span>
          </span>
        </span>
      </h1>
      <style jsx>{`
        .section{
          text-align: center;
        }

      `}</style>
    </div>
  )
}


const Fullpage: any = () => {
  const [top, setTop] = React.useState({});
  const [tot, setTot] = React.useState(0);
  const [avg, setAvg] = React.useState(0);
  const [numbers, setNumbers] = React.useState([]);
  React.useEffect(()=>{
    axios.get('https://api.lottolab.io/all').then(({ data }) => {
      //console.log(data);
      console.log(data.Items[0]);
      let TOP = {
        no: 0,
        total: 0,
      };
      let ACC = 0;
      let TOT = 0;
      setNumbers(data.Items);
      data.Items.forEach((item:any, index:number) => {
        if(TOP.total < item.total){
          TOP = item;
        }
        ACC += item.totSellamnt;
        TOT += item.total;
      });
      setTop(TOP);
      setTot(ACC);
      setAvg((TOT / data.Items.length));
      // setMax(data.Items.reduce((acc: any, i: any) => {
      //   return Number(acc) + Number(i.totSellamnt);
      // }, [0]));
    });
  }, []);
  return(
  <ReactFullpage
      licenseKey = {'OPEN-SOURCE-GPLV3-LICENSE'}
      scrollingSpeed = {1000}

      render={({ state, fullpageApi }: any) => {
        console.log(state);
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <h1 style={{
                  color: 'white',
                  textAlign: 'center',
                  fontStyle: 'italic',
                  fontSize: '32pt',
                  fontWeight: 'bold',
                }}>
                  <span style={{ position: 'relative'}}>
                    <span style={{color: '#FF4E78'}}>Lotto</span>
                    <span style={{color: '#83E4F1'}}>lab</span>.io
                    <span style={{position: 'absolute', right: 0, bottom: '100%', fontSize: '10pt'}}>
                      <span  style={{color: '#83E4F1'}}>로또</span> 통계
                    </span>
                    <span style={{position: 'absolute', left: 0, top: '100%', fontSize: '10pt'}}>
                      {/* <span  style={{color: ''}}>Last Updated: 2020-01-20 21:00:00</span> */}
                    </span>
                  </span>
              </h1>
            </div>
            <TimerSection />
            <TotalAmountSection tot={tot}  no={numbers.length}/>
            <TopSellAmountSection top={top} avg={avg} />
            <style jsx>{`
              .section{
                text-align: center;
              }

            `}</style>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
const IndexPage: NextPage = () => {

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Fullpage />
      
      <span className="version">Version 0.0.1A</span>
      <style jsx>{`
        .version{
          position: fixed;
          bottom: 8px;
          right: 8px;
          text-align: right;
          font-size: 10pt;
          color: #e0e0e0;
        }

      `}</style>

    </Layout>
  );
};

export default IndexPage;
