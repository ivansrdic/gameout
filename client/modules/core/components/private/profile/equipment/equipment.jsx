import React, {Component} from 'react';
import ItemDescription from './../../shared/character-sprites/item-description.jsx';

class Equipment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {character, unEquipItem} = this.props;
    return (
      <div className="equipment-container">

        <div className="character-sprites">
          <div className="character-background-container">
            <img src="character-background.png" className="character-background pixelated"/>
          </div>
          <div className="character-equipment">
            <ItemDescription
              onClickHandler={unEquipItem}
              item={character.head()}
            />
            <ItemDescription
              onClickHandler={unEquipItem}
              item={character.chest()}
            />
            <ItemDescription
              onClickHandler={unEquipItem}
              item={character.leftHand()}
            />
            <ItemDescription
              onClickHandler={unEquipItem}
              item={character.rightHand()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Equipment;