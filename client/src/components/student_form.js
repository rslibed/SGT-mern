import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { addStudent } from '../../actions';
import { connect } from 'react-redux';

class StudentForm extends Component {
  renderInput({ input, type, name, placeholder, defaultValue }) {
    console.log(...input);
    return (
        <div>
            <input {...input} type={type} className="form-control" name={name} placeholder={placeholder} />
        </div>
      
    );
  }
  handleAddStudent (values) {
      this.props.addStudent({name: values.name, grade: values.grade, course: values.course});
  }
  render() {
    return (
      <form className="student-add-form col-lg-3 col-lg-push-9" onSubmit={ this.props.handleSubmit( this.handleAddStudent.bind(this) ) }>
        <h4>Add Student</h4>
        <div className="form-group input-group">
          <span className="input-group-addon">
            <span className=" glyphicon glyphicon-user" />
          </span>
          <Field component={this.renderInput} name="name" type="text" placeholder="Student Name" />
        </div>
        <div className="form-group input-group">
          <span className="input-group-addon">
            <span className="glyphicon glyphicon-list-alt" />
          </span>
          <Field component={this.renderInput} name="grade" type="text" placeholder="Grade i.e. 95" />
        </div>
        <div className="form-group input-group">
          <span className="input-group-addon">
            <span className="glyphicon glyphicon-education" />
          </span>
          <Field component={this.renderInput} name="course" placeholder="Course Name i.e. COMP101" />
        </div>
        <button id="add" className="btn btn-success">
          Add
        </button>
        <button id="cancel" className="btn btn-default">
          Cancel
        </button>
      </form>
    );
  }
}

StudentForm = reduxForm({
  form: 'student-form'
})(StudentForm);

export default connect(null, { addStudent })(StudentForm);
