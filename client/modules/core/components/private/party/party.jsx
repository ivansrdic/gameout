import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Input, Button, ProgressBar, ListGroup, ListGroupItem} from 'react-bootstrap';
import Character from '../shared/character/character.jsx';
import Boss from '../shared/boss/boss.jsx';

class Party extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (this.props.ready) {
      NProgress.done();
    }
  }

  render() {
    if (this.props.ready) {
      const {character} = this.props;
      return (
        <Grid>
          <Row>
            <Col sm={4} className="boss-container">
              <Panel>
                <Boss />
                <p>
                  Text o questu.<br/>

                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam, urna at tincidunt consequat, tortor turpis laoreet leo, in vulputate diam metus vel arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices, dui eget vulputate rutrum, nibh ante tristique eros, sed tempor lacus est a erat. Duis mattis cursus nisi, quis elementum quam vulputate non. Maecenas a erat a sem gravida tempor. Morbi id turpis at dolor ultricies rutrum. Nunc tincidunt ut sem eget laoreet. Nam sed vulputate eros, sed auctor sem.

                  Donec sit amet varius augue. Cras posuere arcu id pretium malesuada. Nunc tincidunt, ipsum id suscipit molestie, ligula lectus dictum lacus, quis egestas felis ante at leo. Phasellus venenatis imperdiet sapien ut accumsan. Proin diam mauris, semper eget imperdiet in, tincidunt non nisl. Integer vitae neque sit amet dolor pharetra scelerisque. Quisque interdum, tortor finibus vehicula ornare, ligula quam ultrices ante, ac porttitor tellus ipsum nec leo. Etiam tempus sem vel ex malesuada, quis maximus tellus finibus. Aliquam dapibus eros nisi, at sollicitudin neque scelerisque nec. Donec semper id magna a pharetra. Donec eu massa id urna consequat finibus vitae at tortor. Quisque eu nunc pretium, gravida felis at, dapibus neque. Aenean sodales nisi aliquet, euismod turpis pharetra, tristique libero.
                </p>
              </Panel>
            </Col>
            <Col sm={8}>
              <h2 className="text-center">Party</h2>
              <Row className="party">
                <Col sm={6} lg={4}>
                  <div className="character-container">
                    <Character character={character}/>
                    <Button className="equipment-toggle" bsStyle="default">
                      <i className="fa fa-times"></i>
                    </Button>
                    <div className="character-details">
                      <h4 className="text-center">John</h4>
                      <ProgressBar bsStyle="danger" min={0} max={50} now={character.stats.health}
                                   label={" %(now)s / %(max)s "}/>
                    </div>
                  </div>
                </Col>
                <Col sm={6} lg={4}>
                  <div className="character-container">
                    <Character character={character}/>
                    <Button className="equipment-toggle" bsStyle="default">
                      <i className="fa fa-times"></i>
                    </Button>
                    <div className="character-details">
                      <h4 className="text-center">Phillip</h4>
                      <ProgressBar bsStyle="danger" min={0} max={50} now={character.stats.health}
                                   label={" %(now)s / %(max)s "}/>
                    </div>
                  </div>
                </Col>
                <Col sm={6} lg={4}>
                  <div className="character-container">
                    <Character character={character}/>
                    <Button className="equipment-toggle" bsStyle="default">
                      <i className="fa fa-times"></i>
                    </Button>
                    <div className="character-details">
                      <h4 className="text-center">Peter</h4>
                      <ProgressBar bsStyle="danger" min={0} max={50} now={character.stats.health}
                                   label={" %(now)s / %(max)s "}/>
                    </div>
                  </div>
                </Col>
              </Row>
              <Input type="text" placeholder="Enter your friend's username" buttonAfter={<Button>Invite to party</Button>} />
              <Panel className="quest-history">
                <ListGroup>
                  <ListGroupItem>Peter dealt 15 damage.</ListGroupItem>
                  <ListGroupItem>Phillip dealt 20 damage, but The boss man dealt 5 damage to the party.</ListGroupItem>
                  <ListGroupItem>John dealt 5 damage.</ListGroupItem>
                </ListGroup>
              </Panel>
            </Col>
          </Row>
        </Grid>
      );
    } else
      return (
        <div></div>
      );
  }
}

export default Party;