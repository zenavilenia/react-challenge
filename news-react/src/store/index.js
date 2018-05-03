import { createStore, combineReducers } from 'redux';
import newsList from './news/reducers';

const reducers = combineReducers({
  news: newsList
})

const store = createStore(reducers);

export default store;