
import React, {Component} from 'react';

export default class About extends Component {
  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.aboutPage}>
        <div style={styles.short}>
          <p style={styles.shortStart}><strong>In short, what does this application do?</strong></p>
          <p style={styles.shortEnd}>This application helps you maintain your inventory. It does this uniquely with verbal commands, using Amazon Alexa devices.</p>
        </div>
        <div style={styles.problem}><h3 style={styles.problemTitle}><strong>The Problem</strong></h3>
          <p style={styles.problemStart}><strong>Tedious data entry, prone to error based on several factors.</strong></p>
          <p style={styles.problemRest}><strong>Let's face it.</strong> We forget to handle inventory changes sometimes. In a work environment where stock is changing all day long, things can be missed. And it can take a lot of time to update everything at the end of the day.</p>
        </div>
        <div style={styles.solution}><h3 style={styles.solutionTitle}><strong>Our Solution</strong></h3>
          <p style={styles.solutionStart}><strong>Hands free, verbal commands.</strong></p>
          <p style={styles.solutionRest}>With an Amazon Alexa placed near your physical inventory, you can ask it to update your stock, in or out.</p>
        </div>
        <div style={styles.features}>
          <p>Features</p>
          <p>Verbally add or subtract products from your stock.</p>
          <p>Check your inventory in passing if you don't have the time to look.</p>
          <p>Add or remove product lines from your inventory through your Alexa as well.</p>
          <p>The website interface allows you to do all of this manually.</p>
          <p>Being supported by Amazon means you can easily verify what your Alexa hears when you speak to it.</p>
          <p>Additionally, you can receive notifications through your phone whenever your Alexa is used, keeping you up to date at all times.</p>
        </div>
        <div style={styles.tech}>
          <ul style={styles.information}><h4 style={styles.techs}><strong>Web Technologies:</strong></h4>
            <li><strong>Client:</strong> React library, React-Router, Axios</li>
            <li><strong>Server:</strong> Node, Express, Massive</li>
            <li><strong>Database:</strong> Postgresql, AWS Remote Database, FAAS</li>
            <li><strong>Alexa</strong> programmed with Amazon Lambda functions</li>
          </ul>
        </div>
      </div>
    )
  }

  getStyles() {
    return {
      aboutPage: {
        backgroundImage: "url(http://southjerseytechies.net/blog/wp-content/uploads/2012/08/clouds.jpg)",
        backgroundSize: "100%",
        height: "100vh",
        padding: "15px"
      },
      short: {
        position: "absolute",
        top: "65px",
        right: "150px",
        width: "25%",
        backgroundColor: "#88BBD6",
        opacity: 0.8,
        color: "white",
        border: "1px solid white",
        borderRadius: "5px",
        padding: "5px"
      },
      shortStart: {
        margin: 0,
        padding: 0
      },
      shortEnd: {
        margin: 0,
        padding: 0
      },
      problem: {
        position: "absolute",
        top: "68px",
        left: "20px",
        width: "40%",
        backgroundColor: "rgb(116, 116, 116)",
        border: "1px solid black",
        borderRadius: "50px 80px 30px 8px",
        boxShadow: "3px 3px 3px rgb(46, 46, 46)",
        opacity: 0.8,
        color: "black",
        textAlign: "center"
      },
      problemTitle: {
        padding: 0,
        paddingTop: "8px",
        margin: 0
      },
      problemStart: {
        fontSize: "105%",
        margin: "3px",
        padding: 0
      },
      problemRest: {
        fontSize: "80%",
        padding: "3px"
      },
      solution: {
        position: "absolute",
        top: "164px",
        left: "335px",
        width: "50%",
        backgroundColor: "rgb(215, 215, 215)",
        border: "1px solid white",
        borderRadius: "64px 48px 20px 28px",
        boxShadow: "3px 3px 3px rgb(245, 245, 245)",
        opacity: 0.8,
        color: "white",
        textAlign: "center"
      },
      solutionTitle: {
        color: "white",
        padding: 0,
        margin: "10px 0px 5px 0px"
      },
      solutionStart: {
        fontSize: "115%",
        margin: 0,
        paddingTop: "10px"
      },
      solutionRest: {
        fontSize: "105%",
        padding: "5px 30px 3px 30px"
      },
      tech: {

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
