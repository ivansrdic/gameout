import React, {Component} from 'react';
import {ProgressBar} from 'react-bootstrap';

class Boss extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="boss-container">
        <img className="boss pixelated"
             src="badguy01.png"
             draggable="false"/>
        <h3 className="text-center">Boss man 1</h3>
        <ProgressBar bsStyle="danger" min={0} max={200} now={200}
                     label={" %(now)s / %(max)s "}/>
      </div>
    );
  }
}

export default Boss;