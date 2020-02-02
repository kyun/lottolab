import got from 'got';
import axios from 'axios';
import * as cheerio from 'cheerio';
import * as iconv from 'iconv-lite';

async function test(){
  const response = await axios.get('https://dhlottery.co.kr/store.do?method=topStore&pageGubun=L645&nowPage=1&drwNo=896', { responseType: 'arraybuffer' });
  const data = iconv.decode(response.data, 'euc-kr');
  const $ = cheerio.load(data);
  console.log($('.paginate_common > a').last().text());
  
  console.log('1st');
  //onst first_stores = [];
  const second_stores = [];
  const first_stores = $('.btns_submit + .group_content table> tbody > tr').toArray().map((item, index) => {
    const obj:any = {no: index };
    $(item).toArray().forEach((jtem, jndex) => {
      const txt = $(jtem).text().trim();
      console.log(jndex);
      obj['txt'] = txt;
      if(jndex === 1) {
        obj['name'] = txt;
      }
      if(jndex === 2) {
        obj['auto'] = txt;
      }
      if(jndex === 3) {
        obj['address'] = txt;
      }
    });
    return obj;
    console.log($(item).text().trim());
    console.log('---')
  });
  console.log(first_stores);
  // console.log('2nd')
  // $('.btns_submit + .group_content+ .group_content table> tbody > tr > td').toArray().map((item, index) => {
  //   console.log($(item).text().trim());
  // });
}
test();


/*
  [
    {
      name: '노다지훼밀리',
      isAuto: true,
      address: '서울 강동구 천호동 393-7번지',
    }, {
      name: '노다지훼밀리',
      isAuto: true,
      address: '서울 강동구 천호동 393-7번지',
    }
  ]

*/