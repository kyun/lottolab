import got from 'got';
import axios from 'axios';
import * as iconv from 'iconv-lite';

async function test(){
  const response = await axios.get('https://dhlottery.co.kr/store.do?method=topStore&pageGubun=L645', { responseType: 'arraybuffer' });
  const data = iconv.decode(response.data, 'euc-kr');
  console.log(data);

}
test();