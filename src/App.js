import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Home from './components/Home';
import Inventory from './components/Inventory/Inventory';
import About from './components/About';
import Contact from './components/Contact';

import Login from './components/Login';
import AuthService from './utils/AuthService';

// validate authentication for private routes
// const requireAuth = (nextState, replace) => {
//   if (!AuthService.loggedIn()) {
//     replace({ path: '/login' })
//   }
// }

class App extends Component {
  render() {
    debugger;
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Route path="/" exact component={Home}/>
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
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
