import React, {Component} from 'react';

import AuthService from '../utils/AuthService';
import Inventory from './Inventory/Inventory';

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      rComp: <div style={styles.home}>
        <div className="jumbotron text-center" style={styles.homeJumbo}>
          <div style={styles.welcome}>
            <h1 style={styles.welcomeText}>Good Morning!</h1>
          </div>
          <div style={styles.intro}>
            <p style={styles.introText}>Initially you will be brought to the inventory page, this is most likely where you will spend most, if not all of your time. Front and center is your table of items and the current stock. The stock is modifiable from the input fields directly adjacent to them. You can add new products in the upper left, remove products in the lower left, or search specific products in the upper right.</p>
            <p style={styles.introText}>You can also control your inventory through your Amazon Alexa by saying "Ask/Tell/Have My Inventory" before or after saying what you want to have modified.</p>
          </div>
          <div style={styles.demo}>
            <p style={styles.demoText}>If you're seeing this, you've been invited to test the My Inventory with Alexa GUI out with our demo account. Click the login button below and use the following credentials:
              <br />
              email:"demo@demo.com" password:"demo"</p>
          </div>
          <button style={styles.button} onClick={AuthService.login}>Log In</button>
        </div>
      </div>
    }
  }
  componentDidMount(){
    if(AuthService.loggedIn()) this.setState({rComp : <Inventory />})
  }
  render() {
    if(AuthService.loggedIn()){
      return(
        <Inventory />
      )
    }
    else{
      const styles = this.getStyles();
      return (
        <div>
        {this.state.rComp}
        </div>
      )
    }
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
      },
      button: {
        backgroundColor: "#99D3DF",
        color: "white",
        fontSize: "150%",
        padding: "5px",
        marginTop: "5px",
        border: "1px solid white",
        borderRadius: "5px",
        boxShadow: "2px 2px 2px rgb(175, 175, 175)",
        margin: "0px 10px 0px 10px"
      },
      demo: {
        margin: "0 auto",
        textAlign: "center",
        width: "40%",
        backgroundColor: "rgb(5, 5, 5)",
        border: "1px solid black",
        borderRadius: "5px"
      },
      demoText: {
        color: "yellow",
        fontSize: "100%",
        margin: "0px 10px 0px 10px"
      }
    }
  }
}
