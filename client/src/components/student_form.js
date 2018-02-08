import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class StudentForm extends Component {
  renderInput({ input, type, name, placeholder, defaultValue }) {
    console.log(...input);
    return (
        <div>
            <input {...input} type={type} className="form-control" name={name} placeholder={placeholder} />
        </div>
      
    );
  }

  something(values) {
    console.log('values', values);
    console.log('hello');
  }
  render() {
    console.log('props', this.props);
    return (
      <form
        className="student-add-form col-lg-3 col-lg-push-9"
        onSubmit={this.props.handleSubmit(() => this.something)}
      >
        <h4>Add Student</h4>
        <div className="form-group input-group">
          <span className="input-group-addon">
            <span className=" glyphicon glyphicon-user" />
          </span>
          <Field
            component={this.renderInput}
            name="name"
            type="text"
            placeholder="name"
          />
        </div>
        <div className="form-group input-group">
          <span className="input-group-addon">
            <span className="glyphicon glyphicon-list-alt" />
          </span>
          <Field component={this.renderInput} name="grade" />
        </div>
        <div className="form-group input-group">
          <span className="input-group-addon">
            <span className="glyphicon glyphicon-education" />
          </span>
          <Field component={this.renderInput} name="course" />
        </div>
        <button id="add" type="button" className="btn btn-success">
          Add
        </button>
        <button id="cancel" type="button" className="btn btn-default">
          Cancel
        </button>
        {/* <button id="getData" type="button" className="btn btn-warning">Get Data From Server</button> */}
      </form>
    );
  }
}

// StudentForm = reduxForm({
//   form: 'name'
// })(StudentForm);
// StudentForm = reduxForm({
//   form: 'grade'
// })(StudentForm);
// StudentForm = reduxForm({
//   form: 'course'ßß
// })(StudentForm);

StudentForm = reduxForm({
  form: 'student-form'
})(StudentForm);

export default StudentForm;
