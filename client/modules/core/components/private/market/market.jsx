import React, {Component} from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
import ItemDescriptionList from '../shared/character-sprites/item-description-list.jsx';

class Market extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Panel>
              <h2 className="text-center">Market</h2>
              <Row>
                <Col md={12}>
                  <ItemDescriptionList
                    getItems={this.props.getItems}
                    getOtherItems={this.props.getInventory}
                    onClickItem={this.props.buyItem}
                    isMarket={true}
                  />
                </Col>
              </Row>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Market;