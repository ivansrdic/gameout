import React, {Component} from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {item} = this.props;
    if (item) {
      let size = 51;
      if (item.type == 'head') size = 102;
      else if (item.type == 'chest') size = 81.8;
      else if (item.type == 'leftHand') size = 76.5;
      else if (item.type == 'rightHand') size = 76.5;
      else size = 102;

      return (
        <div className={"item-container item-container-" + item.type}>
          <img
            src={"items/" + item.type + ".png"}
            className={"item pixelated"} onClick={this.onClickHandler.bind(this)}
            style={{left: (item.set-1)*-size+"px"}}
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

    if (onClickHandler) onClickHandler(item._id);
  }
}

export default Item;