import React, {Component} from 'react';

export default class Home extends Component {
  render() {
    // const styles = this.getStyles();
    return (
      <div>
        <h1>Good Morning!</h1>
        <p>If you would like to view your inventory, click the Inventory link in the navigation bar at the top of the page!</p>
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
