import React, { Component } from 'react';
import { connect } from 'react-redux';

class StudentListItem extends Component {
  render() {
    const { listOfStudents } = this.props;
    const recordOfStudent = listOfStudents.map( (item, index) => {
      return(
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.grade}</td>
          <td>{item.course}</td>
          <td><button className="btn btn-danger btn-sm">Delete</button></td>
        </tr>
      )
    })
    return (
      <tbody>
      { recordOfStudent }
      </tbody>
    );
  }
}

function mapStateToProps(state) {
  return {
    listOfStudents: state.studentInfo.studentList
  };
}

export default connect(mapStateToProps)(StudentListItem);
