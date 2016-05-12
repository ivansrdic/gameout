import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import ItemDescriptionList from './../../shared/character-sprites/item-description-list.jsx';

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
              <ItemDescriptionList
                getItems={this.props.getInventory}
                getOtherItems={this.props.getEquipment}
                onClickItem={this.props.equipItem}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleInventoryCloseClick.bind(this)}>Close</Button>
          </Modal.Footer>
        </div>
      );
    }
  }

  handleInventoryCloseClick() {
    this.props.closeInventory();
  }
}

export default Inventory;