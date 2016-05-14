import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Input, Button, ProgressBar, ListGroup, ListGroupItem} from 'react-bootstrap';
import Character from '../shared/character/character.jsx';
import Boss from '../shared/boss/boss.jsx';

class Group extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inviteUsername: ""
    }
  }

  componentDidUpdate() {
    if (this.props.ready) {
      NProgress.done();
    }
  }

  render() {
    if (this.props.ready) {
      return (
        <Grid>
          <Row>
            <Col sm={4} className="quest-container">
              {this.renderQuest()}
            </Col>
            <Col sm={8}>
              <h2 className="text-center">Group</h2>
              <Row className="group">
                {this.renderGroupMembers()}
              </Row>
              {this.renderInviteInput()}
              <Panel className="quest-history">
                <h3>Damage history</h3>
                <ListGroup>
                  {this.renderGroupDamageHistory()}
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

  renderQuest() {
    const {quest, group} = this.props;

    if(quest) {
      quest.boss.currentHealth = group.currentBossHealth;
      quest.boss.image = quest.questNumber;
      return (
        <Panel>
          <Boss boss={quest.boss} />
          <h4>{quest.name}</h4>
          <p>{quest.description}</p>
        </Panel>
      )
    } else {
      return (
        <Panel className="text-center">
          <Button onClick={this.handleBeginQuestClick.bind(this)}>Begin next quest</Button>
        </Panel>
      );
    }
  }
  
  renderGroupMembers() {
    const {members, group, getCharacter} = this.props;

    if(group)
      return members.map((member) => {
        const character = getCharacter(member);
        return (
          <Col sm={6} lg={4} key={member._id}>
            <div className="character-container">
              <Character character={character}/>
              {this.renderRemoveFromGroup(member)}
              <div className="character-details">
                <h4 className="text-center">{member.username}</h4>
                <ProgressBar bsStyle="danger" min={0} max={character.stats.maxHealth} now={character.stats.currentHealth}
                             label={" %(now)s / %(max)s "}/>
              </div>
            </div>
          </Col>
        );
      });
  }

  renderRemoveFromGroup(member) {
    const {group, user} = this.props;

    if((group.ownerId == user._id && member._id != user._id) || member._id == user._id)
      return (
        <Button className="equipment-toggle" bsStyle="default" onClick={() => {this.handleRemoveUser(member);}}>
          <i className="fa fa-times"></i>
        </Button>
      );
  }

  renderInviteInput() {
    const {group, user} = this.props;

    if(group)
      if(user._id == group.ownerId)
        return (
          <Input type="text" placeholder="Enter your friend's username"
                 value={this.state.inviteUsername}
                 onChange={(e) => {this.setState({inviteUsername: e.target.value})}}
                 buttonAfter={
                       <Button onClick={this.handleInviteClick.bind(this)}>
                         Invite to group
                       </Button>
                     } />
        );
  }

  renderGroupDamageHistory() {
    const {members, getDamageHistory, quest} = this.props;

    if(members) {
      const filteredMembers = members.map((member) => {return {_id: member._id, username: member.username}; });

      const damageHistory = getDamageHistory();


      return damageHistory.map((entry) => {
        return filteredMembers.map((member) => {
          if(entry.userId == member._id) {
            return (
              <ListGroupItem>{member.username} dealt {entry.damageToBoss} damage to the boss. The boss dealt {entry.damageFromBoss} damage to the group.</ListGroupItem>
            );
          }
        });
      });
    }
  }

  handleBeginQuestClick() {
    const {quest, group, beginQuest} = this.props;

    beginQuest(quest, group);
  }
  
  handleRemoveUser(member) {
    this.props.removeUserFromGroup(member);
  }

  handleInviteClick() {
    this.props.addUserToGroup(this.state.inviteUsername);
  }
}

export default Group;