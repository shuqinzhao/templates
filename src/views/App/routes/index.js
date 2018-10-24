
import React, { Component } from 'react';
import { HashRouter as Router, Switch , Route } from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import About from '../components/About';
import NotFound from '../components/NotFound';
import App from '../index';

class AppRouter extends Component {
  render () {
    return (
      <Switch>
        <Route strict exact path="/" component={Dashboard} />
        <Route strict exact path="/about" component={About} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default AppRouter;