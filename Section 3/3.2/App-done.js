import React, { Component } from 'react';

import CardStateful from './addressBook/examples/CardStateful'
import CardStateless from './addressBook/examples/CardStateless'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardStateful food="Pizza" />
        <CardStateless food="Ramen" />
      </div>
    );
  }
}

export default App;
