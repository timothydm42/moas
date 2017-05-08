import React, {Component} from 'react';

export default class Home extends Component {
  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.home}>
        <div style={styles.welcome}>
          <h1 style={styles.welcomeText}>Good Morning!</h1>
        </div>
        <div style={styles.intro}>
          <p>If you would like to view your inventory, click the Inventory link in the navigation bar at the top of the page!</p>
        </div>
      </div>
    )
  }

  getStyles() {
    return {
      home: {
        backgroundColor: "rgb(255, 246, 212)",
        height: "100vh"
      },
      welcome: {
        margin: "0 auto",
        textAlign: "center",
      },
      welcomeText: {
        color: "rgb(96, 103, 178)"
      },
      intro: {
        margin: "0 auto",
        textAlign: "center",
        width: "75%"
      }
    }
  }
}
