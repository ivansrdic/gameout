import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import ItemDescription from './../../shared/character-sprites/item-description.jsx';

class Inventory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.handleInventoryCloseClick.bind(this)}>
        {this.renderInventory()}
      </Modal>
    );
  }

  renderInventory() {
    if (this.props.show) {
      return (
        <div>
          <Modal.Header closeButton>
            <Modal.Title>Inventory</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Click on the items you want to equip.</p>

            <hr />
            <div className="inventory">
              {this.renderInventoryItems()}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleInventoryCloseClick.bind(this)}>Close</Button>
          </Modal.Footer>
        </div>
      );
    }
  }
  
  renderInventoryItems() {
    const {getInventory, equipmentIds} = this.props;
    const inventory = getInventory();

    return (inventory.map(function (item) {
      if($.inArray(item._id, equipmentIds) != -1)
        return (<ItemDescription key={item.name} className="selected" onClickHandler={this.props.equipItem} item={item}/>);
      else
        return (<ItemDescription key={item.name} onClickHandler={this.props.equipItem} item={item}/>);
    }.bind(this)));
  }

  handleInventoryCloseClick() {
    this.props.closeInventory();
  }
}

export default Inventory;