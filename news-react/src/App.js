import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import './components/Navbar.css';

import NavbarCategory from './components/NavbarCategory';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import MyFavorite from './components/MyFavorite';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavbarCategory/>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" render={
              (props => {
                if (localStorage.token) {
                  return <Home props={props} />
                } else {
                  return <Redirect to="/login"/>
                }
              })
            } />
            <Route exact path="/myfavorite" render={
              (props => {
                if (localStorage.token) {
                  return <MyFavorite props={props} />
                } else {
                  return <Redirect to="/login"/>
                }
              })
            } />
            <Route exact path="/:country" render={
              (props => {
                if (localStorage.token) {
                  return <Home props={props} />
                } else {
                  return <Redirect to="/login"/>
                }
              })
            } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
