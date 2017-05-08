import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import Home from './components/Home';
import Inventory from './components/Inventory/Inventory';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
        <Navbar />
          <Redirect from="/" to="/inventory"/>
          <Route path="/home" component={Home}/>
          <Route path="/inventory" component={Inventory}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
