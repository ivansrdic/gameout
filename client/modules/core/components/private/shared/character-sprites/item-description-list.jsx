import React, {Component} from 'react';
import ItemDescription from './item-description.jsx';

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
    const {getItems, getEquipmentIds} = this.props;
    const items = getItems();
    const equipmentIds = getEquipmentIds();

    return (items.map(function (item) {
      if(equipmentIds.indexOf(item._id) != -1)
        return (<ItemDescription key={item._id} className="selected" onClickHandler={this.props.equipItem} item={item}/>);
      else
        return (<ItemDescription key={item._id} onClickHandler={this.props.equipItem} item={item}/>);
    }.bind(this)));
  }
}

export default ItemDescriptionList;