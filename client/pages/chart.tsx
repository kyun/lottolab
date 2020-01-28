import * as React from 'react';
import Layout from '../components/Layout';
import { NextPage } from 'next';
import ReactFullpage from '@fullpage/react-fullpage';
import moment from 'moment';
import axios from 'axios';
import * as Recharts from 'recharts';

const randoms = () => {
  return  (Math.floor(Math.random() * 100) + 50)
}
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
const {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} = Recharts;
const ChartPage: NextPage = () => {

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <ResponsiveContainer width={'100%'} height={200}>
          
          <LineChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>

            <CartesianGrid strokeDasharray="0" horizontal={false}/>
            <Tooltip/>
            <XAxis interval={3}  hide={true}/>
            <Line dataKey="pv" dot={false} stroke="#8884d8" strokeWidth={2} activeDot={{r: 8}}/>
            <Line dataKey="uv" dot={false} stroke="#82ca9d" strokeWidth={2} />
            <Line dataKey="amt" dot={false} stroke="#ff2489" strokeWidth={2} />
          </LineChart>

        </ResponsiveContainer>
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

export default ChartPage;
