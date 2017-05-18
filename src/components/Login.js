import React from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import AuthService from '../utils/AuthService'
// import styles from './styles.module.css'

export class Login extends React.Component {

// Rather than have AuthService.login run on button click here, possibly run it on the navbar when clicking on the Inventory button, if not logged in?
  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.page}>
        <div style={styles.section}>
          <p style={styles.loginPlease}>Please log in here to access your inventory page.</p>
          <button style={styles.button} onClick={AuthService.login}>Login</button>
        </div>
      </div>
    )
  }
  getStyles() {
    return {
      page: {
        backgroundColor: "#E9E9E9",
        height: "100vh",
        textAlign: "center",
        padding: "15px 15px 0px 15px"
      },
      section: {
        backgroundColor: "#88BBD6",
        padding: "15px",
        margin: "0 auto",
        width: "50%",
        border: "1px solid white",
        borderRadius: "5px",
        boxShadow: "5px 5px 5px rgb(175, 175, 175)"
      },
      loginPlease: {
        color: "white",
        fontSize: "150%"
      },
      button: {
        backgroundColor: "#99D3DF",
        color: "white",
        fontSize: "150%",
        padding: "5px",
        marginTop: "5px",
        border: "1px solid white",
        borderRadius: "5px",
        boxShadow: "2px 2px 2px rgb(175, 175, 175)"
      }
    }
  }
}

export default Login;
