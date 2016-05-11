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
                <ListGroup>
                  <ListGroupItem>Peter dealt 15 damage.</ListGroupItem>
                  <ListGroupItem>Phillip dealt 20 damage, but The boss man dealt 5 damage to the group.</ListGroupItem>
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

  renderQuest() {
    const {quest} = this.props;

    if(quest) {
      return (
        <Panel>
          <Boss boss={quest.boss()} />
          <p>
            {quest.name}<br/>

            {quest.description}
          </p>
        </Panel>
      )
    } else {
      return (
        <Panel className="text-center">
          <Button>Start next quest</Button>
        </Panel>
      );
    }
  }
  
  renderGroupMembers() {
    const {members, group, getCharacter, user} = this.props;

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
                <ProgressBar bsStyle="danger" min={0} max={50} now={character.stats.health}
                             label={" %(now)s / %(max)s "}/>
              </div>
            </div>
          </Col>
        );
      });
  }

  renderRemoveFromGroup(member) {
    const {group, user} = this.props;

    if(group.ownerId == user._id && member._id != user._id)
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
  
  handleRemoveUser(member) {
    this.props.removeUserFromGroup(member);
  }

  handleInviteClick() {
    this.props.addUserToGroup(this.state.inviteUsername);
  }
}

export default Group;