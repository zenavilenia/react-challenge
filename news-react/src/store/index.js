import { createStore } from 'redux';

const reducers = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_NEWS':
      return action.payload;
    default:
      return state;
  }
}

const store = createStore(reducers);

export default store;