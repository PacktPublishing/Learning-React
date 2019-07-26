import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import './Default.css';

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/about/123">About John</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <Switch>
            <Route exact path="/" component={Home} />

            <Redirect from="/about/:userId" to="/info/:userId" />
            <Route path="/info/:userId" component={About} />

            <Redirect from="/about" to="/info" />
            <Route path="/info" component={About} />

            <Route path="/contact" component={Contact} />

            <Route component={Error} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
