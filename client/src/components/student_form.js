import React, { Component } from 'react';

class StudentForm extends Component {
  renderInput({
    input,
    type,
    placeholder,
    defaultValue,
    meta: { error, touched }
  }) {
    return (
      <input
        id={id}
        type={type}
        className="form-control"
        name={name}
        placeholder={placeholder}
      />
    );
  }
  render() {
    return (
      <div className="student-add-form col-lg-3 col-lg-push-9">
        <h4>Add Student</h4>
        <div className="form-group input-group">
          <span className="input-group-addon">
            <span className=" glyphicon glyphicon-user" />
          </span>
          <input
            type="text"
            className="form-control"
            name="studentName"
            id="studentName"
            placeholder="Student Name"
          />
        </div>
        <div className="form-group input-group">
          <span className="input-group-addon">
            <span className="glyphicon glyphicon-list-alt" />
          </span>
          <input
            type="text"
            className="form-control"
            name="course"
            id="course"
            placeholder="Student Course"
          />
        </div>
        <div className="form-group input-group">
          <span className="input-group-addon">
            <span className="glyphicon glyphicon-education" />
          </span>
          <input
            type="text"
            className="form-control"
            name="studentGrade"
            id="studentGrade"
            placeholder="Student Grade"
          />
        </div>
        <button id="add" type="button" className="btn btn-success">
          Add
        </button>
        <button id="cancel" type="button" className="btn btn-default">
          Cancel
        </button>
        {/* <button id="getData" type="button" className="btn btn-warning">Get Data From Server</button> */}
      </div>
    );
  }
}

export default StudentForm;
