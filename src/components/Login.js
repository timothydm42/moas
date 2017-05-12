import React from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import AuthService from '../utils/AuthService'
// import styles from './styles.module.css'

export class Login extends React.Component {


  render() {
    const styles = this.getStyles();
    console.log(AuthService.login)
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
