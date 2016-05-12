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
    const {getItems, getOtherItems, onClickItem, isMarket} = this.props;
    const items = getItems();
    const otherItemIds = getOtherItems().map((item) => {return item._id});

    if(isMarket)
      return (items.map(function (item) {
        if(otherItemIds.indexOf(item._id) == -1)
          return (
            <ItemDescription key={item._id} onClickHandler={onClickItem} item={item} isMarket={isMarket} />
          );
      }));
    else
      return (items.map(function (item) {
          return (
            <ItemDescription
              className={(otherItemIds.indexOf(item._id) != -1)?"selected":""}
              key={item._id} onClickHandler={onClickItem} item={item}/>
          );
      }));
  }
}

export default ItemDescriptionList;