import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './Login.css';
import { signup } from '../store/user/action'

class Register extends Component {
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

  register() {
    this.props.signup({ ...this.state })
    
  }

  toLogin() {
    this.props.history.push('/login');
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
            <form onSubmit={(e) => {this.register(); e.preventDefault();}}>
              <div className="container">
                <label><b>Email</b></label>
                <input type="text" placeholder="Enter your email" name="email" value={ this.state.email } onChange={ this.handleChange } required/>
                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" value={ this.state.password } onChange={ this.handleChange } required/>
                <button type="submit">Register</button>
                <hr/>
                <a href="" onClick={ () => { this.toLogin(); }}>Already have account? Login here</a>
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
  signup
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Register);