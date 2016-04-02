import React, {Component} from 'react';

class Stats extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {stats} = this.props;
    return (
      <div>
        <div><b>Strength</b>: {stats.strength}</div>
        <div><b>Stamina</b>: {stats.stamina}</div>
        <div><b>Agility</b>: {stats.agility}</div>
        <div><b>Intelligence</b>: {stats.intelligence}</div>
      </div>
    );
  }
}

export default Stats;