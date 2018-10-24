import React, { Component } from 'react';
import PropTypes from 'prop-types';

class About extends Component {
  static propTypes = {
    history: PropTypes.object
  }
  render () {
    return (
      <div>
        About
      </div>
    )
  }
}

export default About;