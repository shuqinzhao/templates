import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, Link } from 'react-router-dom';

import AppRouter from './routes';

class App extends Component {
  static propTypes = {
    children: PropTypes.object
  }

  render () {
    return (
      <Router>
        <div>
          <br/>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/notFound">NotFound</Link></li>
          </ul>

          <AppRouter />
        </div>
      </Router>
    )
  }
}

export default App;