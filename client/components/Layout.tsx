import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Header from './common/Header'
import Tabbar from './common/Tabbar'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div className="Layout">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Gugi|Noto+Sans+KR:300,400,500,700&display=swap&subset=korean" rel="stylesheet" />    </Head>
    <Header />
    <Tabbar />
    {children}

    <style jsx>{`
      .Layout{
        height: 100vh;
        background: linear-gradient(180deg, #38416C 0%, #36627F 100%);
      }
    `}</style>
  </div>
)

export default Layout
