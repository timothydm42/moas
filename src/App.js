import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Home from './components/Home';
import Inventory from './components/Inventory/Inventory';
import About from './components/About';
import Contact from './components/Contact';

import Login from './components/Login';
import AuthService from './utils/AuthService';

const auth = new AuthService('Qw7Pr6d0lWqyDldL8TDFYikzGMzWIQ4L', 'nathaniel-j.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Router auth={auth}>
          <div>
            <Navbar />
            <Redirect from="/" to="/home"/>
            <Route path="/home" component={Home}/>
            <Route path="/inventory" component={Inventory} onEnter={requireAuth}/>
            <Route path="/login" component={Login}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
