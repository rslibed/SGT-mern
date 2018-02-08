import React from 'react';

export default () => {
  return (
    <div className="row">
      <h1 className="hidden-xs hidden-sm">
        Student Grade Table
        <small className="visible-md-block visible-lg-block text-right">
          Grade Average : <span className="avgGrade label label-default" />
        </small>
        <hr />
      </h1>
      <h3 className="hidden-md hidden-lg text-left">
        Student Grade Table
        <small className="visible-xs-block visible-sm-block text-right">
          Grade Average : <span className="avgGrade label label-default" />
        </small>
        <hr />
      </h3>
    </div>
  );
};
