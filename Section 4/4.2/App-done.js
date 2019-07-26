import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Default.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <Route exact path="/" render={() => {
            return <h2>Home page</h2>
          }} />

          <Route path="/about" render={() => {
            return <h2>About page</h2>
          }} />

          <Route path="/contact" render={() => {
            return <h2>Contact page</h2>
          }} />
        </Router>
      </div>
    );
  }
}

export default App;
