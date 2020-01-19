import * as React from 'react';
import Head from 'next/head';



const Layout: React.FunctionComponent<any> = ({
  children,
  title = 'This is the default title',
}) => (
  <div className="Layout">
    <Head>
      <title>{title}</title>
    </Head>
    <main>
      {children}
    </main>
    <style jsx>{`
      .Layout{
        height: 100vh;
        background: linear-gradient(180deg, #38416C 0%, #36627F 100%);
      }
      main{
        box-sizing: border-box;
        max-width: 768px;
        width: 100%;
        margin: auto;
        padding: 8px;
      }
    `}</style>
  </div>
);
export default Layout;
