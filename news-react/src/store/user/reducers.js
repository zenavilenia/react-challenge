import {
  SIGN_IN_PENDING,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  ADD_NEWS
} from './action.type'

const initialState = {
  user: {
    id: '',
    email: '',
    token: '',
  },
  news: [],
  loading: false,
  error: {
    status: false,
    message: '',
  },
}

const user = (state = { ...initialState }, action) => {
  switch(action.type) {
    case ADD_NEWS:
      return ({
        ...state,
        news: [...state.news, action.payload]
      })
    case SIGN_IN_PENDING:
      return ({
        ...state,
        loading: true,
      });
    case SIGN_IN_SUCCESS:
      return ({
        ...state,
        user: action.payload,
        loading: false,
      });
    case SIGN_IN_ERROR:
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

export default user;