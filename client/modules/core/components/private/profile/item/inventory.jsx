import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import Item from './item.jsx';

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
    if(this.props.show) {
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
    const inventory = this.props.getInventory();

    return (inventory.map(function (item) {
      return (<Item key={item.name} onClickHandler={this.props.equipItem} item={item}/>);
    }.bind(this)));
  }

  handleInventoryCloseClick() {
    this.props.closeInventory();
  }
}

export default Inventory;