import * as React from 'react';
import Layout from '../components/Layout';
import { NextPage } from 'next';
import ReactFullpage from '@fullpage/react-fullpage';
import moment from 'moment';
import axios from 'axios';
import Tabbar from '../components/common/Tabbar';

function useInterval(callback: any, delay: any) {
  const savedCallback: any = React.useRef();
  React.useEffect(() => {
    savedCallback.current = callback;
  });
  React.useEffect(() => {
    function tick() { savedCallback.current(); }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Fullpage: any = () => {
  React.useEffect(()=>{
    axios.get('https://api.lottolab.io/all').then(({ data }) => {
      console.log(data.Items[0]);
    });
  }, []);
  return(
  <ReactFullpage
      licenseKey = {'OPEN-SOURCE-GPLV3-LICENSE'}
      scrollingSpeed = {1000}

      render={({ state, fullpageApi }: any) => {
        console.log(state);
        console.log(fullpageApi);
        return (
          <ReactFullpage.Wrapper>
            {/* <div className="section">
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
                    </span>
                  </span>
              </h1>
            </div> */}
            <div className="section">
              <Tabbar />
              <div>
                
                <div className="row">
                  {
                    new Array(45).fill(0).map((el) => {
                      return <span className="box" />;
                    })
                  }
                </div>


              </div>
            </div>
            <style jsx>{`
              .section{
                position: relative;c
                text-align: center;
              }
              .row{
                text-align: center;
              }
              .box{
                display: inline-block;
                width: 6px;
                height: 6px;
                background-color: red;
              }
              .box + .box{
                margin-left: 1px;
              }
              @media (max-width: 375px){
                .box{
                  width: 6px;
                  height: 6px;
                }
                .box + .box{
                  margin-left: 1px;
                }
              }
              @media (min-width: 376px) and (max-width: 400px){
                .box{
                  width: 7px;
                  height: 7px;
                }
                .box + .box{
                  margin-left: 1px;
                }
              }
              @media (min-width: 418px) and (max-width: 468px){
                .box{
                  width: 7px;
                  height: 7px;
                }
                .box + .box{
                  margin-left: 2px;
                }
              }
              @media (min-width: 469px) and (max-width: 700px){
                .box{
                  width: 8px;
                  height:8px;
                }
                .box + .box{
                  margin-left: 2px;
                }
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
