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
        <p style={styles.featureTitle}>Features</p>
        <p style={styles.feature1}>Verbally add or subtract products from your stock.</p>
        <p style={styles.feature2}>Check your inventory in passing if you don't have the time to look.</p>
        <p style={styles.feature3}>Add or remove product lines from your inventory through your Alexa as well.</p>
        <p style={styles.feature4}>The website interface allows you to do all of this manually.</p>
        <p style={styles.feature5}>Being supported by Amazon means you can easily verify what your Alexa hears when you speak to it.</p>
        <p style={styles.feature6}>Additionally, you can receive notifications through your phone whenever your Alexa is used, keeping you up to date at all times.</p>
        <div style={styles.tech}>
          <h4 style={styles.techs}><strong>Web Technologies</strong></h4>
          <p style={styles.individualTech}><strong>Client:</strong> React library, React-Router, Axios</p>
          <p style={styles.individualTech}><strong>Server:</strong> Node, Express, Massive</p>
          <p style={styles.individualTech}><strong>Database:</strong> Postgresql, AWS Remote Database, FAAS</p>
          <p style={styles.individualTech}><strong>Alexa</strong> programmed with Amazon Lambda functions</p>
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
        left: "375px",
        width: "50%",
        backgroundColor: "rgb(215, 215, 215)",
        border: "1px solid white",
        borderRadius: "64px 48px 20px 28px",
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
      featureTitle: {
        fontSize: "180%",
        position: "absolute",
        top: "250px",
        left: "35px",
        width: "200px",
        backgroundColor: "#88BBD6",
        border: "1px solid white",
        borderRadius: "20px",
        opacity: 0.8,
        color: "white",
        padding: "10px 40px 10px 40px",
        textAlign: "center",
        zIndex: +1
      },
      feature1: {
        position: "absolute",
        top: "295px",
        left: "20px",
        backgroundColor: "#88BBD6",
        border: "1px solid white",
        borderRadius: "20px",
        opacity: 0.9,
        color: "white",
        padding: "15px 20px 15px 20px"
      },
      feature2: {
        position: "absolute",
        top: "335px",
        left: "30px",
        backgroundColor: "#88BBD6",
        border: "1px solid white",
        borderRadius: "20px",
        opacity: 0.9,
        color: "white",
        padding: "15px 20px 15px 20px"
      },
      feature3: {
        position: "absolute",
        top: "375px",
        left: "48px",
        backgroundColor: "#88BBD6",
        border: "1px solid white",
        borderRadius: "20px",
        opacity: 0.9,
        color: "white",
        padding: "15px 20px 15px 20px"
      },
      feature4: {
        position: "absolute",
        top: "415px",
        left: "20px",
        backgroundColor: "#88BBD6",
        border: "1px solid white",
        borderRadius: "20px",
        opacity: 0.9,
        color: "white",
        padding: "15px 20px 15px 20px"
      },
      feature5: {
        position: "absolute",
        top: "455px",
        left: "45px",
        backgroundColor: "#88BBD6",
        border: "1px solid white",
        borderRadius: "20px",
        opacity: 0.9,
        color: "white",
        padding: "15px 20px 15px 20px",
        zIndex: +1
      },
      feature6: {
        position: "absolute",
        top: "495px",
        left: "67px",
        backgroundColor: "#88BBD6",
        border: "1px solid white",
        borderRadius: "20px",
        opacity: 0.9,
        color: "white",
        padding: "15px 20px 15px 20px"
      },
      techs: {
        color: "white",
        textAlign: "center"
      },
      tech: {
        position: "absolute",
        top: "340px",
        right: "25px",
        width: "25%",
        backgroundColor: "#88BBD6",
        opacity: 0.8,
        color: "white",
        border: "1px solid white",
        borderRadius: "5px",
        padding: "5px"
      },
      individualTech: {
        margin: "2px 0px 2px 0px",
        padding: "1px 10px 1px 10px"
      }
    }
  }
}
