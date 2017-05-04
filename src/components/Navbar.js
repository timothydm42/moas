import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import Home from './Home';
import Inventory from './Inventory/Inventory';
import About from './About';
import Contact from './Contact';

export default class Navbar extends Component {
  render() {
    // const styles = this.getStyles();
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link to="/home" className="navbar-brand">Alexa Inventory with Manuel</Link>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/inventory">Inventory</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </nav>
          <Redirect from="/" to="/inventory"/>
          <Route path="/home" component={Home}/>
          <Route path="/inventory" component={Inventory}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    )
  }

  getStyles() {
    return {
      example: {
        margin: 0,
        color: "black"
      }
    }
  }
}
