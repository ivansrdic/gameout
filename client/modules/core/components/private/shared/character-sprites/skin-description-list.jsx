import React, {Component} from 'react';
import SkinDescription from './skin-description.jsx';

class ItemDescriptionList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        {this.renderItems()}
      </div>
    )
  }

  renderItems() {
    const {getSkins, getAppearanceIds} = this.props;
    const skins = getSkins();
    const appearanceIds = getAppearanceIds();

    return (skins.map(function (skin) {
      if(appearanceIds.indexOf(skin._id) != -1)
        return (<SkinDescription key={skin._id} className="selected" onClickHandler={this.props.equipItem} skin={skin}/>);
      else
        return (<SkinDescription key={skin._id} onClickHandler={this.props.equipItem} skin={skin}/>);
    }.bind(this)));
  }
}

export default ItemDescriptionList;