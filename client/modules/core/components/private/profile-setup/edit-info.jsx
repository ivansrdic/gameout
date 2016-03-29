import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Input, ButtonGroup, ButtonInput, Button} from 'react-bootstrap';

class EditInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      errors,
      ageValidation,
      heightValidation,
      weightValidation
    } = this.props;

    return (
      <Col md={10} mdOffset={1}>
        <h1 className="text-center">Edit info</h1>

        <form onSubmit={this.handleFormSubmit.bind(this)}>

          <label htmlFor="gender" className="control-label input-group">Gender</label>
          <ButtonGroup ref="gender" className="form-group" bsSize="large" data-toggle="buttons">
            <label onClick={e => this.handleGenderPick(e, "male")} className="btn btn-default">
              <input name="level" value="beginner" type="radio"/>Male
            </label>
            <label onClick={e => this.handleGenderPick(e, "female")} className="btn btn-default">
              <input name="level" value="intermediate" type="radio"/>Female
            </label>
          </ButtonGroup>

          <Input
            ref="age"
            type="text"
            label="Age"
            placeholder="Age"
            help={errors.ageValidation ? errors.ageValidation.message : ""}
            bsStyle={errors.ageValidation ? errors.ageValidation.status : null}
            onBlur={(e) => ageValidation(this.refs.age.getValue())}/>

          <Input
            ref="height"
            type="text"
            label="Height"
            placeholder="Height - measured in meters"
            help={errors.heightValidation ? errors.heightValidation.message : ""}
            bsStyle={errors.heightValidation ? errors.heightValidation.status : null}
            onBlur={(e) => heightValidation(this.refs.height.getValue())}/>

          <Input
            ref="weight"
            type="text"
            label="Weight"
            placeholder="Weight"
            help={errors.weightValidation ? errors.weightValidation.message : ""}
            bsStyle={errors.weightValidation ? errors.weightValidation.status : null}
            onBlur={(e) => weightValidation(this.refs.weight.getValue())}/>

          <label htmlFor="level" className="control-label input-group">Level</label>
          <ButtonGroup refs="level" className="form-group" bsSize="large" data-toggle="buttons">
            <label onClick={e => this.handleLevelPick(e, "beginner")} className="btn btn-default">
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
    this.refs.gender = value;
  }

  handleLevelPick(e, value) {
    this.refs.level = value;
  }

  //endregion

  handleFormSubmit(e) {
    e.preventDefault();

    const {age, weight, height, gender, level} = this.refs;

    const userInfo = {
      age: age.getValue(),
      weight: weight.getValue(),
      height: height.getValue(),
      gender,
      level
    };

    const {ageValidation, heightValidation, weightValidation} = this.props;
    ageValidation(userInfo.age);
    heightValidation(userInfo.height);
    weightValidation(userInfo.weight);

    // Call the method.
    // Meteor.call("addUserInfo", userInfo);

    // FlowRouter.go('/customize-character');
  }
}

export default EditInfo;