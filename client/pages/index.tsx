import * as React from 'react'
// import Link from 'next/link'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import Tabbar from '../components/common/Tabbar'
import LottoItem from '../components/List/LottoItem'
import * as Recharts from 'recharts';

const randoms = () => {
  return  (Math.floor(Math.random() * 100) + 50)
}
const {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} = Recharts;
const data = [
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},

  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},

  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},

  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},

  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},

  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},

  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},

  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},

  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},

  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},

  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},
  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},

  {name: '1', uv: randoms(), pv: randoms(), amt: randoms()},

];
const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      {/* <h1>123</h1> */}
      {/* <LottoItem />
      <LottoItem /> */}
      <div className="chart-wrap">
        <div className="xAxis">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
          <span>11</span>
          <span>12</span>

        </div>
        <ResponsiveContainer width={'100%'} height={200}>
          
          <LineChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>

            <CartesianGrid strokeDasharray="0" horizontal={false}/>
            <Tooltip/>
            <XAxis interval={3}  hide={true}/>
            <Line dataKey="pv" dot={false} stroke="#8884d8" strokeWidth={4} activeDot={{r: 8}}/>
            <Line dataKey="uv" dot={false} stroke="#82ca9d" strokeWidth={4} />
            <Line dataKey="amt" dot={false} stroke="#ff2489" strokeWidth={4} />
          </LineChart>

        </ResponsiveContainer>
       
      </div>
      <style jsx>{`
        .chart-wrap{
          position: relative;
        }
        .chart-wrap > .xAxis{
          position: absolute;
          width: 100%;
          height: 100%;

        }
        .chart-wrap > .xAxis > span{
          box-sizing: border-box;
          display: inline-block;
          padding-top: 8px;
          border-top: 2px solid rgba(255,255,255,0.4);
          text-align: center;
          color: rgba(255,255,255,0.7);
          width: calc(100%/ 12);
          height: 100%;
          background-color: rgba(255,255,255,0.1);
        }
      `}</style>

    </Layout>
  )
}

export default IndexPage
