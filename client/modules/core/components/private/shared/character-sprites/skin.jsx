import React, {Component} from 'react';

class Skin extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {skin} = this.props;
    if (skin) {
      
      const size = 102;
      return (
        <div className={"skin-container skin-container-" + skin.type}>
          <img
            src={"skins/" + skin.type + ".png"}
            className={"skin pixelated"} onClick={this.onClickHandler.bind(this)}
            style={{left: (skin.set-1)*-size+"px"}}
            draggable="false"
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
    const {onClickHandler, skin} = this.props;
    
    if (onClickHandler) onClickHandler(skin._id);
  }
}

export default Skin;