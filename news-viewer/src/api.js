const axios = require('axios');
const API_KEY = 'cae96f1ed5474c4d8a3cd852d3b2e307';
const URL = `http://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`;


const api = {
  getNewsHeadline: async (category) => {
    try {
      const res = await axios({
        method: 'get',
        url: `${URL}${category === 'all' ? '' : `&category=${category}`}`,
      })
      if (res.status === 200) {
        return res.data.articles;
      } else {
        console.log('...?')
      }
    } catch(e) {
      console.log(e);
    }
    
  }
}

export default api;
