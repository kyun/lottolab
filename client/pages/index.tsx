import * as React from 'react';
import Layout from '../components/Layout';
import { NextPage } from 'next';
import ReactFullpage from '@fullpage/react-fullpage';
import moment from 'moment';

const Section: React.FC<any> = () => {
  return (
    <div className="section">
      <p>Section 1 (welcome to fullpage.js)</p>
      <style jsx>{`
        .section{
          text-align: center;
        }
      `}</style>
    </div>
  )
}

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
    // if ((timer - 1) === 0) {

    // }
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
  )
}
const Fullpage: any = () => {
  console.log('ggg')
  return(
  <ReactFullpage
      licenseKey = {'OPEN-SOURCE-GPLV3-LICENSE'}
      scrollingSpeed = {1000}

      render={({ state, fullpageApi }: any) => {
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
                      <span  style={{color: ''}}>Last Updated: 2020-01-20 21:00:00</span>
                    </span>
                  </span>
              </h1>
            </div>
            <TimerSection />
            <div className="section">
              <h1 style={{ color: 'white', fontSize: '24pt', fontWeight: 'bold', fontStyle: 'italic'}}>
                <span style={{ position: 'relative'}}>
                  4825<span style={{fontSize: '14pt'}}>조 </span>
                  1429<span style={{fontSize: '14pt'}}>억 </span>
                  2124<span style={{fontSize: '14pt'}}>만 </span>
                  3321<span style={{fontSize: '14pt'}}>원 </span>
                  <span style={{position: 'absolute', right: 0, bottom: '100%', fontSize: '10pt'}}>
                    <span  style={{color: '#83E4F1'}}>누적 총 판매 금액</span>
                  </span>
                  <span style={{position: 'absolute', left: 0, top: '100%', fontSize: '10pt', fontWeight: 'normal' }}>
                    <span  style={{color: '#e0e0e0'}}>* 회당 평균 <span style={{color: '#FF4E78',fontWeight: 'bold'}}> 1234억 1232만원 </span> 판매</span>
                  </span>
                </span>
              </h1>
            </div>
            <div className="section">
              <h1 style={{ color: 'white', fontSize: '24pt', fontWeight: 'bold', fontStyle: 'italic'}}>
                <span style={{ position: 'relative'}}>
                   440회 
                  {/* <span style={{fontWeight: 500, fontSize: '14pt', color: '#e0e0e0'}}> (2009-12-01)</span> */}
                  <span style={{fontWeight: 500, fontSize: '14pt', color: '#fff'}}> (2123만 1234게임)</span>
                  <span style={{position: 'absolute', right: 0, bottom: '100%', fontSize: '10pt'}}>
                    <span  style={{color: '#83E4F1'}}>가장 많이 팔렸던 회차는..</span>
                  </span>
                  <span style={{position: 'absolute', left: 0, top: '100%', fontSize: '10pt', fontWeight: 'normal' }}>
                    <span  style={{color: '#e0e0e0'}}>* 평균 판매량 대비 
                      <span style={{color: '#FF4E78', fontSize: '12pt', fontWeight: 'bold'}}> 40% ⬆</span>
                    </span>
                  </span>
                </span>
              </h1>
            </div>
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
