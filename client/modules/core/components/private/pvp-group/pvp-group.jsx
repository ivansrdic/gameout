import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Input, Button, ProgressBar, ListGroup, ListGroupItem} from 'react-bootstrap';
import Character from '../shared/character/character.jsx';

class Group extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inviteUsername: ""
    }
  }

  render() {
    return (
      <Grid>
        <h2 className="text-center">Player versus player</h2>
        {this.renderPlayers()}
        <Row>
          <Col sm={12}>
            {this.renderInviteInput()}
            {this.renderGroupDamageHistoryContainer()}
          </Col>
        </Row>
      </Grid>
    );
  }

  renderPlayers() {
    const {group} = this.props;

    if(group) {
      const {firstPlayer, secondPlayer} = this.props;
      return (
        <Row>
          <Col sm={4} className="quest-container">
            {this.renderPlayer(firstPlayer, group.firstPlayerHealth)}
          </Col>
          <Col sm={4} className="quest-container">

          </Col>
          <Col sm={4} className="quest-container">
            {this.renderPlayer(secondPlayer, group.secondPlayerHealth)}
          </Col>
        </Row>
      );
    }
  }

  renderPlayer(player, currentHealth) {
    if(player) {
      const {getCharacter} = this.props;

      const character = getCharacter(player);

      return (
        <div className="character-container">
          <Character character={character}/>
          <div className="character-details">
            <h4 className="text-center">{player.username}</h4>
            <ProgressBar bsStyle="danger" min={0} max={character.stats.maxHealth} now={currentHealth}
                         label={" %(now)s / %(max)s "}/>
          </div>
        </div>
      );
    }
  }

  renderInviteInput() {
    const {group, surrender} = this.props;

    if(!group) {
      return (
        <Input type="text" placeholder="Enter your friend's username"
               value={this.state.inviteUsername}
               onChange={(e) => {this.setState({inviteUsername: e.target.value})}}
               buttonAfter={
                     <Button onClick={this.handleInviteClick.bind(this)}>
                       Challenge to duel
                     </Button>
                   }/>
      );
    } else {
      return (
        <div className="text-center">
          <Button onClick={surrender}>Surrender</Button>
        </div>
      )
    }
  }

  renderGroupDamageHistoryContainer() {
    if(this.props.group)
      return (
        <Panel className="quest-history">
          <h3>Damage history</h3>
          <ListGroup>
            {this.renderGroupDamageHistory()}
          </ListGroup>
        </Panel>
      );
  }

  renderGroupDamageHistory() {
    const {firstPlayer, secondPlayer, getDamageHistory} = this.props;

    const members = [firstPlayer, secondPlayer];

    const damageHistory = getDamageHistory();


    return damageHistory.map((entry) => {
      return members.map((member) => {
        if (entry.userId == member._id) {
          return (
            <ListGroupItem>{member.username} dealt {entry.damageToEnemy} damage.</ListGroupItem>
          );
        }
      });
    });
  }

  handleInviteClick() {
    this.props.startPvP(this.state.inviteUsername);
  }
}

export default Group;