import React, {Component} from 'react';
import ItemDescription from './../../shared/character-sprites/item-description.jsx';

class Equipment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="equipment-container">

        <div className="character-sprites">
          <div className="character-background-container">
            <img src="character-background.png" className="character-background pixelated"/>
          </div>
          <div className="character-equipment">
            {this.renderEquipment()}
          </div>
        </div>
      </div>
    );
  }

  renderEquipment() {
    const {equipment, unEquipItem} = this.props;
    if(equipment)
      return equipment.map(function(item) {
        return(
          <ItemDescription
            key={item._id}
            onClickHandler={unEquipItem}
            item={item}
          />
        );
      });
  }
}

export default Equipment;