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
    fetch(`https://swapi.co/api/vehicles/`)
      .then(response => response.json())
      .then(json => this.setState({ vehicles: json.results }))
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
            {this.state.vehicles.map((vehicle, index) => {
              // vehicle.url: https://swapi.co/api/vehicles/4/
              const id = vehicle.url.split('/')[5]
              return (
                <li key={index}>
                  <Link to={`/vehicle/${id}`}>
                    {vehicle.name}
                  </Link>
                </li>
              )
            })}
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
