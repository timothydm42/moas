import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import Home from './components/Home';
import Inventory from './components/Inventory/Inventory';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render() {
    const styles = this.getStyles();
    return (
      <div>
        <Navbar />
        <Router>
          <div>
          <ul className="nav navbar-nav navbar-right">
            <li style={styles.navbarButtons}><Link to="/home" style={styles.navButtonText}>Home</Link></li>
            <li style={styles.navbarButtons}><Link to="/inventory" style={styles.navButtonText}>Inventory</Link></li>
            <li style={styles.navbarButtons}><Link to="/about" style={styles.navButtonText}>About</Link></li>
            <li style={styles.navbarButtons}><Link to="/contact" style={styles.navButtonText}>Contact</Link></li>
          </ul>
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

export default App;
