import React, { Component } from 'react';
import './App.css';

import Card from './Card.js'
import './Card.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default App;
