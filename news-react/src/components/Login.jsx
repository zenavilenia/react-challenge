import axios from 'axios';

import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  login() {
    axios.post('http://35.187.244.238/login', this.state)
      .then(response => {
        console.log(response)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('iduser', response.data.user._id)
        console.log('ini session--', localStorage.getItem('token'))
        alert('Login success!')
      })
      .catch(err => {
        alert('Login failed!')
        console.error(err)
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => {this.login(); e.preventDefault();}}>
          <div className="container">
            <label for="uname"><b>Email</b></label>
            <input type="text" placeholder="Enter your email" name="email" value={ this.state.email } onChange={ this.handleChange } required/>
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" value={ this.state.password } onChange={ this.handleChange } required/>
            <button type="submit">Login</button>
            <hr/>
            <a href="">Don't have account? Register here</a>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;