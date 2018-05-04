import axios from 'axios';

import {
  GET_NEWS_PENDING,
  GET_NEWS_SUCCESS,
  GET_NEWS_ERROR
} from './action.type'

export const getNews = (country) => {
  return dispatch => {
    dispatch(getNewsPending())
    axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=8750ab3a273a48de9dd3010c912439e0`)
      .then(response => {
        const articles = response.data.articles;
        dispatch(getNewsSuccess(articles));
      })
      .catch(err => dispatch(getNewsFailed(err)));
  }
}

const getNewsSuccess = (articles) => ({
  type: GET_NEWS_SUCCESS,
  payload: articles
})

const getNewsFailed = (error) => ({
  type: GET_NEWS_ERROR,
  payload: error
})

const getNewsPending = () => ({
  type: GET_NEWS_PENDING
})
