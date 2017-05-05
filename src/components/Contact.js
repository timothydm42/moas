
import React, {Component} from 'react';

export default class Contact extends Component {
  render() {
    const styles = this.getStyles();
    return (
      <div>
        <ul style={styles.navList}>
          <li style={styles.navListItem}>Thing 1</li>
          <li style={styles.navListItem}>Thing 2</li>
          <li style={styles.navListItem}>Thing 3</li>
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
        </ul>
      </div>
    )
  }

  getStyles() {
    return {
      navList: {
        listStyleType: "none",
        margin: 0,
        padding: 12,
        overflow: "hidden",
        backgroundColor: "black",
        color: "white"
      },
      navListItem: {
        float: "left",
        padding: 8
      }
    }
  }
}
