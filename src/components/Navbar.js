import React, {Component} from 'react';
import '../App.css';

export default class Navbar extends Component {
  render() {
    const styles = this.getStyles();
    return (
      <div>
        <ul style={styles.navList}>
          <li style={styles.navListItem}>Thing 1</li>
          <li style={styles.navListItem}>Thing 2</li>
          <li style={styles.navListItem}>Thing 3</li>
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
