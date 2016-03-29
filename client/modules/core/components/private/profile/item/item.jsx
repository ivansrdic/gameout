import React, {Component} from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {item, equipment} = this.props;
    if(item)
      return (
        <div className={"item-container " + (equipment?("item-container-" + item.type):"")}>
          <div
            className={"item " + item.type + " pixelated"} onClick={this.onClickHandler.bind(this)}
            style={{backgroundPosition: (item.set-1)*-51+"px"}}
          >
          </div>
        </div>
      );
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