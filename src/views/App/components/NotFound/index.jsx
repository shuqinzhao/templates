import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotFound extends Component {
  static propTypes = {
    history: PropTypes.object
  }
  render () {
    return (
      <div>
        NotFound
      </div>
    )
  }
}

export default NotFound;