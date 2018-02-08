import React, { Component } from 'react';
import { connect } from 'react-redux';

class StudentListItem extends Component {
  render() {
    return <div>Hello</div>;
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(StudentListItem);
