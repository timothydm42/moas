import React from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import AuthService from '../utils/AuthService'
// import styles from './styles.module.css'

export class Login extends React.Component {

// Rather than have AuthService.login run on button click here, possibly run it on the navbar when clicking on the Inventory button, if not logged in?
  render() {
    const styles = this.getStyles();
    return (
      <div className={styles.root}>
        <h2>Login</h2>
        <ButtonToolbar className={styles.toolbar}>
          <Button bsStyle="primary" onClick={AuthService.login}>Login</Button>
        </ButtonToolbar>
      </div>
    )
  }
  getStyles() {
    return {
      nav: {
        zIndex: +2
      }
    }
  }
}

export default Login;
