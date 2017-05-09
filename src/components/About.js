
import React, {Component} from 'react';

export default class About extends Component {
  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.aboutPage}>
        <div className="row" style={styles.about}>
          <p className="col-md-4" style={styles.information}><strong>Problem:</strong> Tedious, error prone data entry
            No more keeping notes in your head or elsewhere, and then sitting down to your inventory and manually entering in each change; simply inform alexa when inventory changes, and she takes care of updating your records.
            Example: Your restaurants are using their stock all day long, sometimes in a crunch employees keeping track of inventory during a rush fails
            Your employees constantly have to re-count inventory once inventory is finally re-calculated, your employee has to sit down and enter it manually somewhere to keep track of it.
            This tedious, error prone, lengthy process is repeated.
          </p>
          <p className="col-md-4" style={styles.information}><strong>Solution:</strong> You install an Alexa Device next to your pantry and refrigerators.
            As stock is used, your employees simply tell Alexa what they are using as they pass by.
            Alexa updates a cloud based inventory.
            The cloud based inventory is accessible online for convenient viewing.
            Including live updates sent by Alexa you can update the cloud based inventory manually as well.
          </p>
          <ul className="col-md-3" style={styles.information}><h4 style={styles.techs}>Web technologies:</h4>
            <li><strong>Client:</strong> React library, React-Router, Axios</li>
            <li><strong>Server:</strong> Node, Express, Massive</li>
            <li><strong>Database:</strong> Postgresql AWS Remote Database FAAS</li>
            <li><strong>Alexa</strong> programmed with Amazon Lambda functions</li>
          </ul>
        </div>
        <div className="row" style={styles.about}>
          <p className="col-md-4" style={styles.information}>This is an inventory management system built to function with the Amazon Alexa line of products. With this service, you will be able to handle your inventory with voice commands, allowing you to do what you need to do, when you need to do it.</p>
          <p className="col-md-4" style={styles.information}>Update inventory, hands free, without the usual tedious data entry. We do provide an interface for tedious data entry too, in case you want it.</p>
          <p className="col-md-3" style={styles.information}>Note: Your Alexa already hates the number 2. That's not our fault.</p>
        </div>
      </div>
    )
  }

  getStyles() {
    return {
      aboutPage: {
        backgroundColor: "#E9E9E9",
        height: "100vh",
        padding: "15px"
      },
      about: {
        backgroundColor: "#88BBD6",
        color: "white",
        width: "98%",
        margin: "0 auto"
      },
      information: {
        margin: "10px"
      },
      techs: {
        color: "white"
      }
    }
  }
}
