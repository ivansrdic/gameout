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
      getCharacter,
      getHairs,
      getTorsos,
      getLegs,
      getColors,
      getAppearanceIds,
      equipSkin
    } = this.props;
    const character = getCharacter();

    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Panel>
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
                    <label htmlFor="hair" className="control-label input-group">Hair</label>
                    <div className="inventory">
                      <SkinDescriptionList
                        getSkins={getHairs}
                        getAppearanceIds={getAppearanceIds}
                        equipItem={equipSkin}
                      />
                    </div>

                    <label htmlFor="torso" className="control-label input-group">Torso</label>
                    <div className="inventory">
                      <SkinDescriptionList
                        getSkins={getTorsos}
                        getAppearanceIds={getAppearanceIds}
                        equipItem={equipSkin}
                      />
                    </div>

                    <label htmlFor="legs" className="control-label input-group">Legs</label>
                    <div className="inventory">
                      <SkinDescriptionList
                        getSkins={getLegs}
                        getAppearanceIds={getAppearanceIds}
                        equipItem={equipSkin}
                      />
                    </div>

                    <label htmlFor="skins" className="control-label input-group">Skins</label>
                    <div className="inventory">
                      <SkinDescriptionList
                        getSkins={getColors}
                        getAppearanceIds={getAppearanceIds}
                        equipItem={equipSkin}
                      />
                    </div>
                  </Col>
                </Row>

                <Button onClick={this.handleUndoClick.bind(this)} className="pull-right">Undo Changes</Button>

              </Col>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }

  handleUndoClick(e) {
    const {equipSkin, getAppearanceIds} = this.props;
    const currentAppearanceIds = getAppearanceIds();

    for (let i = 0; i < this.lastAppearanceIds.length; i++)
      if (this.lastAppearanceIds[i] != currentAppearanceIds[i])
        equipSkin(this.lastAppearanceIds[i]);
  }
}