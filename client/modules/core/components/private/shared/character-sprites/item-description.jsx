import React, {Component} from 'react';
import {OverlayTrigger, Popover} from 'react-bootstrap';

class ItemDescription extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {item} = this.props;
    if (item) {
      const size = 51;
      return (
        <OverlayTrigger
          placement="bottom"
          overlay={
            <Popover id={item.name} title={item.name}>
              {item.description}<br/>
              <div><b>Strength</b>: {0}</div>
              <div><b>Stamina</b>: {0}</div>
              <div><b>Agility</b>: {0}</div>
              <div><b>Intelligence</b>: {0}</div>
            </Popover>}
        >
          <div className={"item-container item-container-" + item.type}>
            <img
              src={"items/" + item.type + ".png"}
              className={"item pixelated"} onClick={this.onClickHandler.bind(this)}
              style={{left: (item.set-1)*-size+"px"}}
            />
          </div>
        </OverlayTrigger>
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

export default ItemDescription;