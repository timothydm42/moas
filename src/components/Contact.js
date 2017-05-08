
import React, {Component} from 'react';

export default class Contact extends Component {
  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.page}>
        <p>Github Accounts:
        Mikhail: https://github.com/kyleryker
        Nathan: https://github.com/Nathaniel-j-s
        Tim: https://github.com/timothydm42
        </p>
        <p>
          LinkedIn Accounts:
          Mikhail: https://www.linkedin.com/in/mikhail-collins-87a85b13a/
          Nathan: https://www.linkedin.com/in/nathaniel-smith-122962138/
          Tim: Timothy Mitchell: Master of World Leadership
        </p>
      </div>
    )
  }

  getStyles() {
    return {
      page: {
        backgroundColor: "rgb(255, 246, 212)",
        height: "100vh"
      },
      navListItem: {
        float: "left",
        padding: 8
      }
    }
  }
}
