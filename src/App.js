import './index.scss';
import Home from './Home';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Apply from './Apply'


class App extends Component {
  render() {
  return (
    <div >
       <Router>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/jobId'} className="nav-link">Apply</Link></li>
          </ul>
          </nav>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/:jobId' component={Apply} /> />
          </Switch>
       </Router>
    </div>
  );
  }
}

export default App;



