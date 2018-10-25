import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

const mapStateToProps = (state, ownProps) => {
  const { layout: { showLoading } } = state;

  return {
    showLoading,
  }
}

export default connect(mapStateToProps)(Dashboard);