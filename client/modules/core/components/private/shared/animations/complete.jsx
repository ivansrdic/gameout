import React from 'react';
import {Panel} from 'react-bootstrap';

export default (props) => {
  if(props.animate) {
    return (
      <Panel className="complete-container">
        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
        <h2>Workout completed</h2>
      </Panel>
    );
  } else {
    return (
      <div className="complete-container">
      </div>
    );
  }
}