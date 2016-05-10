import React, {Component} from 'react';
import {ProgressBar} from 'react-bootstrap';

class Boss extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {boss} = this.props;
    return (
      <div className="boss-container">
        <img className="boss pixelated"
             src="badguy01.png"
             draggable="false"/>
        <h3 className="text-center">{boss.name}</h3>
        <ProgressBar bsStyle="danger" min={0} max={boss.health} now={boss.health}
                     label={" %(now)s / %(max)s "}/>
      </div>
    );
  }
}

export default Boss;