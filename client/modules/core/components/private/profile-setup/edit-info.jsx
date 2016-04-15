import React from 'react';
import Component from '/client/modules/core/components/common/component.jsx';
import Message from '../../common/message.jsx';
import {Grid, Row, Col, Panel, Input, ButtonGroup, ButtonInput} from 'react-bootstrap';

class EditInfo extends Component {
  constructor(props) {
    super(props);

    this.gender = "male";
    this.level = "beginner";
  }

  componentDidMount() {
    NProgress.done();
  }

  render() {
    const {
      messages,
      ageValidation,
      heightValidation,
      weightValidation,
      usernameValidation
    } = this.props;

    return (
      <Col md={10} mdOffset={1}>
        <h1 className="text-center">Edit info</h1>
        <Message message={messages.globalMessage}/>

        <form onSubmit={this.handleFormSubmit.bind(this)}>

          <Input
            ref="username"
            type="text"
            label="Username"
            placeholder="Username"
            help={messages.usernameValidation ? messages.usernameValidation.message : ""}
            bsStyle={messages.usernameValidation ? messages.usernameValidation.status : null}
            onBlur={(e) => usernameValidation(this.refs.username.getValue().trim())}/>

          <label htmlFor="gender" className="control-label input-group">Gender</label>
          <ButtonGroup ref="gender" className="form-group" bsSize="large" data-toggle="buttons">
            <label onClick={e => this.handleGenderPick(e, "male")} className="btn btn-default active">
              <input name="gender" value="male" type="radio"/>Male
            </label>
            <label onClick={e => this.handleGenderPick(e, "female")} className="btn btn-default">
              <input name="gender" value="female" type="radio"/>Female
            </label>
          </ButtonGroup>

          <Input
            ref="age"
            type="text"
            label="Age"
            placeholder="Age"
            help={messages.ageValidation ? messages.ageValidation.message : ""}
            bsStyle={messages.ageValidation ? messages.ageValidation.status : null}
            onBlur={(e) => ageValidation(Number(this.refs.age.getValue()))}/>

          <Input
            ref="height"
            type="text"
            label="Height"
            placeholder="Height - measured in meters"
            help={messages.heightValidation ? messages.heightValidation.message : ""}
            bsStyle={messages.heightValidation ? messages.heightValidation.status : null}
            onBlur={(e) => heightValidation(Number(this.refs.height.getValue()))}/>

          <Input
            ref="weight"
            type="text"
            label="Weight"
            placeholder="Weight - measured in kilograms"
            help={messages.weightValidation ? messages.weightValidation.message : ""}
            bsStyle={messages.weightValidation ? messages.weightValidation.status : null}
            onBlur={(e) => weightValidation(Number(this.refs.weight.getValue()))}/>

          <label htmlFor="level" className="control-label input-group">Level</label>
          <ButtonGroup refs="level" className="form-group" bsSize="large" data-toggle="buttons">
            <label onClick={e => this.handleLevelPick(e, "beginner")} className="btn btn-default active">
              <input name="level" value="beginner" type="radio"/>Beginner
            </label>
            <label onClick={e => this.handleLevelPick(e, "intermediate")} className="btn btn-default">
              <input name="level" value="intermediate" type="radio"/>Intermediate
            </label>
            <label onClick={e => this.handleLevelPick(e, "advance")} className="btn btn-default">
              <input name="level" value="advanced" type="radio"/>Advanced
            </label>
          </ButtonGroup>

          <ButtonInput className="pull-right" type="submit" value="Next"/>
        </form>

      </Col>
    );
  }

  //region ButtonGroupHandlers
  handleGenderPick(e, value) {
    this.gender = value;
  }

  handleLevelPick(e, value) {
    this.level = value;
  }
  //endregion

  resetForm() {
    const labels = ['age', 'height', 'weight', 'username'];
    labels.forEach((label) => {this.refs[label].getInputDOMNode().value = '';});
    this.props.clearState();
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const {age, weight, height} = this.refs;
    const {username} = this.refs;
    const {gender, level} = this;

    const userInfo = {
      username: username.getValue().trim(),
      age: Number(age.getValue()),
      weight: Number(weight.getValue()),
      height: Number(height.getValue()),
      gender,
      level
    };

    const {ageValidation, heightValidation, weightValidation, usernameValidation, submitUserInfo} = this.props;
    
    ageValidation(userInfo.age);
    heightValidation(userInfo.height);
    weightValidation(userInfo.weight);
    usernameValidation(userInfo.username);

    submitUserInfo(userInfo, this.resetForm.bind(this));
    this.props.createCharacter(); // Action won't run if user already has a character.
  }
}

export default EditInfo;