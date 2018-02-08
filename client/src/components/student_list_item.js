import React, { Component } from 'react';
import { connect } from 'react-redux';

class StudentListItem extends Component {
  render() {
    return (
      <tr>
        <td>Ryan Libed</td>
        <td>100</td>
        <td>Computer Science</td>
        <td><button className="btn btn-danger btn-sm">Delete</button></td>
      </tr>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(StudentListItem);
