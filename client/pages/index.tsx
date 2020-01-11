import * as React from 'react'
// import Link from 'next/link'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import Tabbar from '../components/common/Tabbar'
import LottoItem from '../components/List/LottoItem'

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      {/* <h1>123</h1> */}
      <LottoItem />
    </Layout>
  )
}

export default IndexPage
