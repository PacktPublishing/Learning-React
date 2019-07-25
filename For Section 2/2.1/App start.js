import React, { Component } from 'react';

import InputEvents from './events/InputEvents'
import MovementEvents from './events/MovementEvents'
import './events/Events.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputEvents />
        <MovementEvents />
      </div>
    );
  }
}

export default App;
