import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './components/Navbar.css';


import NavbarCategory from './components/NavbarCategory';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavbarCategory/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:country" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
