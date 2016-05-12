import React, {Component} from 'react';
import {OverlayTrigger, Popover} from 'react-bootstrap';
import Stats from '../character/stats.jsx';

class ItemDescription extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {item, className, isMarket} = this.props;
    if (item) {
      const size = 51;
      return (
        <OverlayTrigger
          placement="bottom"
          overlay={
            <Popover id={item.name} title={item.name}>
              {item.description}<br/>
              <Stats stats={item.stats}/>
              {isMarket?<div><br/><b>Price</b>: {item.price}<i className="fa fa-circle"></i></div>:""}
            </Popover>}
        >
          <div className={"item-container item-container-" + item.type + " " + className}>
            <img
              src={"items/" + item.type + ".png"}
              className={"item pixelated"}
              onClick={this.onClickHandler.bind(this)}
              style={{left: (item.set-1)*-size+"px"}}
              draggable="false"
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