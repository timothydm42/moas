import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Welcome extends Component {
  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.welcome}>
        <div className="jumbotron text-center" style={styles.welcomeJumbo}>
          <div style={styles.thanks}>
            <h1 style={styles.thanksText}>Thanks for logging in!</h1>
          </div>
          <div style={styles.next}>
            <Link to="/inventory" style={styles.nextText}>Continue to the inventory page here.</Link>
          </div>
        </div>
      </div>
    )
  }

  getStyles() {
    return {
      welcome: {
        backgroundColor: "#E9E9E9",
        height: "100vh",
        padding: "50px"
      },
      welcomeJumbo: {
        backgroundColor: "#88BBD6",
        border: "1px solid white",
        borderRadius: "5px",
        boxShadow: "3px 3px 3px rgb(245, 245, 245)",
        opacity: 0.8
      },
      thanks: {
        margin: "0 auto",
        textAlign: "center",
      },
      thanksText: {
        color: "white"
      },
      next: {
        margin: "0 auto",
        textAlign: "center",
        width: "75%"
      },
      nextText: {
        color: "white",
        fontSize: "200%"
      }
    }
  }
}
