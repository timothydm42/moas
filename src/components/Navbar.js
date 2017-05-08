import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import Home from './Home';
import Inventory from './Inventory/Inventory';
import About from './About';
import Contact from './Contact';

export default class Navbar extends Component {
  render() {
    const styles = this.getStyles();
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default" style={styles.navbarGeneral}>
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
            </div>
          </nav>
        </div>
      </Router>
      // So I'm realizing now that all of this routing needs to be primarily handled on the App.js file
      // because it's messing with the actual placement of components.
      // Currently everything is coming from the Navbar component, so the whole website starts immediately
      // below the navbar, which is causing some issues.
    )
  }

  getStyles() {
    return {
      navbarGeneral: {
        backgroundColor: "rgb(178, 161, 100)",
        color: "black",
        margin: 0
      },
      navbarButtons: {
        backgroundColor: "rgb(255, 239, 186)",
        margin: "8px 5px 2px 5px",
        border: "1px solid rgb(255, 239, 186)",
        borderRadius: "5px"
      },
      navButtonText: {
        padding: "5px 10px 5px 10px"
      }
    }
  }
}
