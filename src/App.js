import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Inventory from './components/Inventory/Inventory';
import About from './components/About';
import Contact from './components/Contact';
import Welcome from './components/Welcome';

import Login from './components/Login';
import AuthService from './utils/AuthService';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Route path="/" exact render={() => (
              AuthService.loggedIn() ? (
                <Inventory />
              ) : (
                <Home />
              )
            )}/>
            <Route path="/inventory" render={() => (
              AuthService.loggedIn() ? (
                <Inventory />
              ) : (
                <Login />
              )
            )}/>
            <Route path="/login" component={Login}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/welcome" component={Welcome}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
