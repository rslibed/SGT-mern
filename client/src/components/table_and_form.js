import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import StudentForm from './student_form';
import StudentTable from './student_table';

const TableAndForm = () => {
  return (
    <div className="row">
      <StudentForm />
      <StudentTable />
    </div>
  );
};

export default TableAndForm;
