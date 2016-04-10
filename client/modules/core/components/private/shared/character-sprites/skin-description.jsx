import React, {Component} from 'react';
import {OverlayTrigger, Popover} from 'react-bootstrap';

class SkinDescription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {skin, className} = this.props;
    if (skin) {

      const size = 51;
      return (
        <OverlayTrigger
          placement="bottom"
          overlay={
            <Popover id={skin.name} title={skin.name}>
              {skin.description}<br/>
            </Popover>}
        >
          <div className={"skin-container skin-container-" + skin.type + " " + className}>
            <img
              src={"skins/" + skin.type + ".png"}
              className={"skin pixelated"} onClick={this.onClickHandler.bind(this)}
              style={{left: (skin.set-1)*-size+"px"}}
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
    if (this.props.className == 'selected') return;
    const {onClickHandler, skin} = this.props;

    if (onClickHandler) onClickHandler(skin._id);
  }
}

export default SkinDescription;