import React, {Component} from 'react';

export default class Home extends Component {
  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.home}>
        <div className="jumbotron text-center" style={styles.homeJumbo}>
          <div style={styles.welcome}>
            <h1 style={styles.welcomeText}>Good Morning!</h1>
          </div>
          <div style={styles.intro}>
            <p style={styles.introText}>If you would like to view your inventory, click the Inventory link in the navigation bar at the top of the page!</p>
          </div>
        </div>
      </div>
    )
  }

  getStyles() {
    return {
      home: {
        backgroundColor: "#E9E9E9",
        height: "100vh",
        padding: "50px"
      },
      homeJumbo: {
        backgroundColor: "#88BBD6",
        border: "1px solid white",
        borderRadius: "5px",
        boxShadow: "6px 6px 6px rgb(175, 175, 175)"
      },
      welcome: {
        margin: "0 auto",
        textAlign: "center",
      },
      welcomeText: {
        color: "white"
      },
      intro: {
        margin: "0 auto",
        textAlign: "center",
        width: "75%"
      },
      introText: {
        color: "white"
      }
    }
  }
}
