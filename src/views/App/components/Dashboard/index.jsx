import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dashboard extends Component {
  static propTypes = {
    history: PropTypes.object
  }
  render () {
    return (
      <div>
        Dashboard
      </div>
    )
  }
}

export default Dashboard;