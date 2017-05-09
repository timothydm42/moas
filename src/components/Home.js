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
            <p style={styles.introText}>Initially you will be brought to the inventory page, this is most likely where you will spend most, if not all of your time. Front and center is your table of items and the current stock. The stock is modifiable from the input fields directly adjacent to them. You can add new products in the upper left, remove products in the lower left, or search specific products in the upper right.</p>
            <p style={styles.introText}>You can also control your inventory through your Amazon Alexa by saying "Ask/Tell/Have LemonGrab" before or after saying what you want to have modified.</p>
          </div>
        </div>
      </div>
    )
  }

  getStyles() {
    return {
      home: {
        backgroundImage: "url(https://www.haltonsthelensvca.org.uk/sites/sthelenscvs.org.uk/files/blue-sky_2.jpg)",
        backgroundSize: "120%",
        height: "100vh",
        padding: "50px"
      },
      homeJumbo: {
        backgroundColor: "#88BBD6",
        border: "1px solid white",
        borderRadius: "5px",
        boxShadow: "3px 3px 3px rgb(245, 245, 245)",
        opacity: 0.8
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
