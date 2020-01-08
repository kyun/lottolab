
const axios = require('axios')

const LOTTO_URL = "https://ldenunu3m8.execute-api.ap-northeast-1.amazonaws.com/dev/updateNumber?no=";

async function loop(){
  let no = 801;
  for(let i of Array(91)){
    const { data } = await axios.get(`${LOTTO_URL}${no}`).catch((e)=>{ throw e });
    console.log(data);
    no++;
  }
  console.log('end')
}

loop();