import React from 'react';
import StudentListItem from './student_list_item';

export default () => {
  return (
    <div className="student-list-container col-lg-9 col-lg-pull-3">
      <table className="student-list table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Student Course</th>
            <th>Student Grade</th>
            <th>Operations</th>
          </tr>
        </thead>
          <StudentListItem />
      </table>
    </div>
  );
};
