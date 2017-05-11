import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    const styles = this.getStyles();
    return (
        <div style={styles.nav}>
          <nav className="navbar navbar-default" style={styles.navbarGeneral}>
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link to="/home" className="navbar-brand" style={styles.title}>Alexa Inventory with Manuel</Link>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li style={styles.navbarButtons}><Link to="/home" style={styles.navButtonText}>Home</Link></li>
                  <li style={styles.navbarButtons}><Link to="/inventory" style={styles.navButtonText}>Inventory</Link></li>
                  <li style={styles.navbarButtons}><Link to="/about" style={styles.navButtonText}>About</Link></li>
                  <li style={styles.navbarButtons}><Link to="/contact" style={styles.navButtonText}>Contact</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    )
  }

  getStyles() {
    return {
      nav: {
        zIndex: +2
      },
      navbarGeneral: {
        backgroundColor: "#CDCDCD",
        color: "black",
        margin: 0,
        boxShadow: "3px 3px 5px rgb(175, 175, 175)"
      },
      title: {
        color: "white"
      },
      navbarButtons: {
        backgroundColor: "#99D3DF",
        margin: "8px 5px 2px 5px",
        border: "1px solid #88BBD6",
        borderRadius: "5px",
        boxShadow: "2px 2px 2px rgb(175, 175, 175)"
      },
      navButtonText: {
        padding: "5px 10px 5px 10px",
        color: "white"
      }
    }
  }
}
