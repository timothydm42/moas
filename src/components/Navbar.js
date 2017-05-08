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
                <Link to="/home" className="navbar-brand">Alexa Inventory with Manuel</Link>
              </div>
              <ul className="nav navbar-nav navbar-right">
                <li style={styles.navbarButtons}><Link to="/home" style={styles.navButtonText}>Home</Link></li>
                <li style={styles.navbarButtons}><Link to="/inventory" style={styles.navButtonText}>Inventory</Link></li>
                <li style={styles.navbarButtons}><Link to="/about" style={styles.navButtonText}>About</Link></li>
                <li style={styles.navbarButtons}><Link to="/contact" style={styles.navButtonText}>Contact</Link></li>
              </ul>
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
        backgroundColor: "rgb(178, 161, 100)",
        color: "black",
        margin: 0
      },
      navbarButtons: {
        backgroundColor: "rgb(96, 103, 178)",
        margin: "8px 5px 2px 5px",
        border: "1px solid rgb(255, 239, 186)",
        borderRadius: "5px"
      },
      navButtonText: {
        padding: "5px 10px 5px 10px",
        color: "rgb(186, 192, 255)"
      }
    }
  }
}
