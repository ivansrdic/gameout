import React, {Component} from 'react';
import Skin from './../character-sprites/skin.jsx';
import Item from './../character-sprites/item.jsx';

class Character extends Component {
  constructor(props) {
    super(props);
  //  Accepted params; character, isNaked
  }

  render() {
    const {character} = this.props;
    return (
      <div className="character-sprites">
        <div className="character-skins">
          <Skin skin={character.hair()}/>
          <Skin skin={character.torso()}/>
          <Skin skin={character.legs()}/>
          <Skin skin={character.color()}/>
        </div>
        {this.renderEquipment()}
      </div>
    );
  }

  renderEquipment() {
    const isNaked = this.props.isNaked;
    const {character} = this.props;
    if (!isNaked) return (
      <div className="character-equipment">
        <Item item={character.head()}/>
        <Item item={character.chest()}/>
        <Item item={character.leftHand()}/>
        <Item item={character.rightHand()}/>
      </div>
    );
  }
}

export default Character;