import React, {Component} from 'react';

class Item extends Component {
  constructor(props) {
    super(props);

    const {item, heroEquipment} = props;

    let folder = "";
    if (item.type == 'head' || item.type == 'chest' || item.type == 'leftHand' || item.type == 'rightHand')
      folder = 'items/';
    else
      folder = "skins/";

    let size = 51;
    if(heroEquipment) {
      if(item.type == 'head') size = 102;
      else if(item.type == 'chest') size = 81.8;
      else if(item.type == 'leftHand') size = 76.5;
      else if(item.type == 'rightHand') size = 76.5
      else size = 102;
    }

    this.state = {
      size,
      folder
    }
  }

  render() {
    const {item} = this.props;
    if(item) {

      return (
        <div className={"item-container item-container-" + item.type}>
          <img
            src={this.state.folder + item.type + ".png"}
            className={"item pixelated"} onClick={this.onClickHandler.bind(this)}
            style={{left: (item.set-1)*-this.state.size+"px"}}
            height="100%"
          />
        </div>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }

  onClickHandler() {
    const {onClickHandler, item} = this.props;

    onClickHandler(item._id);
  }
}

export default Item;