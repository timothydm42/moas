import React, { Component } from 'react';
import Inventory from './components/Inventory/Inventory';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Inventory />
      </div>
    );
  }
}

export default App;
