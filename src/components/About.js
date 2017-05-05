
import React, {Component} from 'react';

export default class About extends Component {
  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.aboutSurround}>
        <div style={styles.about}>
          <p style={styles.information}>This is an inventory management system built to function with the Amazon Alexa line of products. With this service, you will be able to handle your inventory with voice commands, allowing you to do what you need to do, when you need to do it.</p>
          <p style={styles.information}>Update inventory, hands free, without the usual tedious data entry. We do provide an interface for tedious data entry too, in case you want it.</p>
          <p style={styles.information}>Note: Your Alexa already hates the number 2. That's not our fault.</p>
        </div>
      </div>
    )
  }

  getStyles() {
    return {
      aboutSurround: {
        backgroundColor: "black",
        position: "absolute",
        top: 54,
        zIndex: -1
      },
      about: {
        backgroundImage: "url(https://assets.wired.com/photos/w_1720/wp-content/uploads/2017/01/AlexaTA_17003558883167.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 100%",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        color: "white"
      },
      information: {
        width: "33%",
        padding: "15px"
      }
    }
  }
}
