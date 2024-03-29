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
             src={boss.image + ".png"}
             draggable="false"/>
        <h3 className="text-center">{boss.name}</h3>
        <ProgressBar bsStyle="danger" min={0} max={boss.maxHealth} now={boss.currentHealth}
                     label={" %(now)s / %(max)s "}/>
      </div>
    );
  }
}

export default Boss;