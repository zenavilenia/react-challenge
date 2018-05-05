import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './Login.css';
import { signin } from '../store/user/action'

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
    this.props.signin({ ...this.state })
  }

  toRegister() {
    this.props.history.push('/register');
  }

  render() {
    let { loading, error } = this.props.user;
    let token = localStorage.getItem('token');
    if (loading) {
      return <div className="loader"></div>
    } else if (error.status) {
      return <h1>Oops! Something error: { error.message } </h1>
    } else {
      if(token) {
        return <Redirect to="/"/>
      } else {
        return (
          <div>
            <form onSubmit={(e) => {this.login(); e.preventDefault();}}>
              <div className="container">
                <label><b>Email</b></label>
                <input type="text" placeholder="Enter your email" name="email" value={ this.state.email } onChange={ this.handleChange } required/>
                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" value={ this.state.password } onChange={ this.handleChange } required/>
                <button type="submit">Login</button>
                <hr/>
                <a href="" onClick={ () => { this.toRegister(); }}>Don't have account? Register here</a>
              </div>
            </form>
          </div>
        );
      }
    }
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  signin
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login);