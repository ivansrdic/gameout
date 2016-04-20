import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Input, ButtonGroup, ButtonInput, Button} from 'react-bootstrap';
import Character from '../shared/character/character.jsx';
import SkinDescriptionList from '../shared/character-sprites/skin-description-list.jsx';

export default class CustomizeCharacter extends Component {
  constructor(props) {
    super(props);
    this.lastAppearanceIds = this.props.getAppearanceIds();
  }

  render() {
    const {
      character,
      getSkins,
      getAppearanceIds,
      equipSkin
    } = this.props;

    return (
      <Col md={10} mdOffset={1}>
        <h1 className="text-center">Customize character</h1>
        <Row>
          <Col sm={6} lg={6}>
            <label htmlFor="level" className="control-label input-group">Character</label>
            <div className="character-container">
              <Character character={character} isNaked={true}/>
            </div>
          </Col>
          <Col sm={6} lg={6}>
            <label htmlFor="level" className="control-label input-group">Hair/Torso/Legs/Skin</label>
            <div className="inventory">
              <SkinDescriptionList
                getSkins={getSkins}
                getAppearanceIds={getAppearanceIds}
                equipItem={equipSkin}
              />
            </div>
          </Col>
        </Row>

        <Button onClick={this.handleUndoClick.bind(this)} className="pull-right">Undo Changes</Button>

      </Col>
    );
  }

  handleUndoClick(e) {
    const {equipSkin, getAppearanceIds} = this.props;
    const currentAppearanceIds = getAppearanceIds();

    for (let i = 0; i < this.lastAppearanceIds.length; i++)
      if (this.lastAppearanceIds[i] != currentAppearanceIds[i]) equipSkin(this.lastAppearanceIds[i]);
  }
}