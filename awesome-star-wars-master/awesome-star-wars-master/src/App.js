import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './Default.css';

import Home from './components/Home'
import Error from './components/Error'
import Nav from './starWars/Nav'
import Vehicle from './starWars/Vehicle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Awesome Star Wars Vehicles!</h1>
        <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
          <hr />
          <Nav />
          <hr />

          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/vehicle/:vehicleId" component={Vehicle} />

            <Route component={Error} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
