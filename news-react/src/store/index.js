import { createStore } from 'redux';
import axios from 'axios';

const fetchNewsData = (country) => {
  axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=8750ab3a273a48de9dd3010c912439e0`)
    .then(response => {
      const articles = response.data.articles;
      return articles;
    })
    .catch(err => console.log(err));
}

const reducers = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_NEWS':
      return fetchNewsData(action.payload);
    default:
      return state;
  }
}

const store = createStore(reducers);

export default store;