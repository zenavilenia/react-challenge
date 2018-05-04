import {
  GET_NEWS_PENDING,
  GET_NEWS_SUCCESS,
  GET_NEWS_ERROR
} from './action.type'

const initialState = {
  data: [],
  loading: false,
  error: {
    status: false,
    message: '',
  },
}

const newsList = (state = { ...initialState }, action) => {
  switch(action.type) {
    case GET_NEWS_PENDING:
      return ({
        ...state,
        loading: true,
      });
    case GET_NEWS_SUCCESS:
      return ({
        ...state,
        data: action.payload,
        loading: false,
      });
    case GET_NEWS_ERROR:
      const errorObj = {
        status: true,
        message: action.payload.message
      }
      return ({
        ...state,
        error: {
          ...errorObj
        },
        loading: false,
      });
    default:
      return state;
  }
}

export default newsList