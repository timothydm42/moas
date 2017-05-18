import React, {Component} from 'react';

export default class Contact extends Component {
  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.page}>
        <div style={styles.sectionOne}>
          <img src="http://ocramius.github.io/presentations/proxy-pattern-in-php/assets/img/gh.svg" style={styles.image} alt="Github Icon"/>
          <h2 style={styles.header}>Github</h2>
          <div className="row" style={styles.linkSection}>
            <p className="col-md-4"><a href="https://github.com/kyleryker" style={styles.links}>Mikhail Collins</a></p>
            <p className="col-md-4"><a href="https://github.com/Nathaniel-j-s" style={styles.links}>Nathan Smith</a></p>
            <p className="col-md-4"><a href="https://github.com/timothydm42" style={styles.links}>Tim Mitchell</a></p>
          </div>
          <p style={styles.info}>Github is better for contacting us regarding bugs in our code. Don't be afraid! Help us make this the best project ever!</p>
        </div>

        <div style={styles.sectionTwo}>
          <img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png" style={styles.image} alt="LinkedIn Icon"/>
          <h2 style={styles.header}>LinkedIn</h2>
          <div className="row" style={styles.linkSection}>
            <p className="col-md-4"><a href="https://www.linkedin.com/in/mikhail-collins-87a85b13a/" style={styles.links}>Mikhail Collins</a></p>
            <p className="col-md-4"><a href="https://www.linkedin.com/in/nathaniel-smith-122962138/" style={styles.links}>Nathan Smith</a></p>
            <p className="col-md-4"><a href="https://www.linkedin.com/in/timdm/" style={styles.links}>Tim Mitchell</a></p>
          </div>
          <p style={styles.info}>LinkedIn is the best place to contact us with job opportunities. More specifically, job offers that you're giving to us, not the other way around.</p>
        </div>
      </div>
    )
  }

  getStyles() {
    return {
      page: {
        backgroundColor: "#E9E9E9",
        height: "100vh",
        display: "flex",
        textAlign: "center",
        padding: "15px 15px 0px 15px"
      },
      sectionOne: {
        backgroundColor: "#88BBD6",
        padding: "15px",
        margin: "15px",
        flex: 1,
        border: "1px solid white",
        borderRadius: "5px",
        boxShadow: "5px 5px 5px rgb(175, 175, 175)"
      },
      sectionTwo: {
        backgroundColor: "#88BBD6",
        padding: "15px",
        margin: "15px",
        flex: 1,
        border: "1px solid white",
        borderRadius: "5px",
        boxShadow: "5px 5px 5px rgb(175, 175, 175)"
      },
      header: {
        color: "white"
      },
      linkSection: {
        margin: "0 auto"
      },
      links: {
        color: "white",
        fontSize: "120%",
        margin: "5px",
        padding: "5px",
        backgroundColor: "#99D3DF",
        border: "1px solid white",
        borderRadius: "5px",
        boxShadow: "2px 2px 2px #5A8B95",
        whiteSpace: "nowrap"
      },
      info: {
        color: "white",
        marginTop: "20px",
        padding: "0px 20px 0px 20px"
      },
      image: {
        width: "200px",
        border: "10px solid white",
        borderRadius: "50%",
        backgroundColor: "#99D3DF",
        boxShadow: "5px 5px 5px #5A8B95"
      }
    }
  }
}
