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

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      vehicles: []
    }
  }

  componentDidMount() {
    // Fetch list of vehicles from SWAPI.co
  }

  render() {
    return (
      <div className="App">
        <h1>Star Wars Vehicles</h1>
        <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
          <hr />
          <ul>
            <li><a href="/vehicle/4">Sand Crawler</a></li>
            <li><a href="/vehicle/6">T-16 skyhopper</a></li>
            <li><a href="/vehicle/7">X-34 landspeeder</a></li>
            <li><a href="/vehicle/8">TIE/LN starfighter</a></li>
            <li><a href="/vehicle/14">Snowspeeder</a></li>
            <li><a href="/vehicle/16">TIE bomber</a></li>
            <li><a href="/vehicle/18">AT-AT</a></li>
            <li><a href="/vehicle/19">AT-ST</a></li>
            <li><a href="/vehicle/20">Storm IV Twin-Pod cloud car</a></li>
            <li><a href="/vehicle/24">Sail barge</a></li>
          </ul>
          <hr />

          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/vehicle/:vehicleId" render={({match}) => {
              return (
                <h2>Vehicle ID: {match.params.vehicleId}</h2>
              )
            }} />

            <Route component={Error} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
