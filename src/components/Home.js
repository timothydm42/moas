import React, {Component} from 'react';

export default class Home extends Component {
  render() {
    const styles = this.getStyles();
    return (
      <div>
        <div style={styles.welcome}>
          <h1>Good Morning!</h1>
        </div>
        <div style={styles.intro}>
          <p>If you would like to view your inventory, click the Inventory link in the navigation bar at the top of the page!</p>
        </div>
      </div>
    )
  }

  getStyles() {
    return {
      welcome: {
        margin: "0 auto",
        textAlign: "center"
      },
      intro: {
        margin: "0 auto",
        textAlign: "center",
        width: "75%"
      }
    }
  }
}
