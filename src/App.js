import React, { Component } from 'react';
import MvpFrontEnd from './components/MvpFrontEnd';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MvpFrontEnd />
      </div>
    );
  }
}

export default App;
