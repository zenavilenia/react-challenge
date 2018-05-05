import axios from 'axios';

import {
  SIGN_IN_PENDING,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR
} from './action.type'

export const signup = (objUser) => {
  return dispatch => {
    axios.post('http://35.187.244.238/register', { ...objUser })
      .then(response => {
        console.log(response)
        const {email, password} = response.data.data;
        console.log(`email: ${email}, password: ${password}`)
        alert('Register success!')
      })
      .catch(err => {
        alert('Register failed!')
        console.error(err)
      })
  }
}

export const signin = (objUser) => {
  return dispatch => {
    dispatch(signinPending())
    axios.post('http://35.187.244.238/login', { ...objUser })
      .then(response => {
        console.log(response)
        const user = {
          id: response.data.user._id,
          email: response.data.user.email
        }
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('iduser', response.data.user._id)
        dispatch(signinSuccess(user));
      })
      .catch(err => {
        dispatch(signinFailed(err));
      })
  }
}

const signinSuccess = (articles) => ({
  type: SIGN_IN_SUCCESS,
  payload: articles
})

const signinFailed = (error) => ({
  type: SIGN_IN_ERROR,
  payload: error
})

const signinPending = () => ({
  type: SIGN_IN_PENDING
})
