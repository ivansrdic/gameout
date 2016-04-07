import React, {Component} from 'react';
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
      errors,
      ageValidation,
      heightValidation,
      weightValidation,
      usernameValidation
    } = this.props;

    return (
      <Col md={10} mdOffset={1}>
        <h1 className="text-center">Edit info</h1>
        {this.renderServerErrorMessage(errors)}

        <form onSubmit={this.handleFormSubmit.bind(this)}>

          <Input
            ref="username"
            type="text"
            label="Username"
            placeholder="Username"
            help={errors.usernameValidation ? errors.usernameValidation.message : ""}
            bsStyle={errors.usernameValidation ? errors.usernameValidation.status : null}
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
            help={errors.ageValidation ? errors.ageValidation.message : ""}
            bsStyle={errors.ageValidation ? errors.ageValidation.status : null}
            onBlur={(e) => ageValidation(Number(this.refs.age.getValue()))}/>

          <Input
            ref="height"
            type="text"
            label="Height"
            placeholder="Height - measured in meters"
            help={errors.heightValidation ? errors.heightValidation.message : ""}
            bsStyle={errors.heightValidation ? errors.heightValidation.status : null}
            onBlur={(e) => heightValidation(Number(this.refs.height.getValue()))}/>

          <Input
            ref="weight"
            type="text"
            label="Weight"
            placeholder="Weight - measured in kilograms"
            help={errors.weightValidation ? errors.weightValidation.message : ""}
            bsStyle={errors.weightValidation ? errors.weightValidation.status : null}
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

  renderServerErrorMessage(errors) {
    if (errors.serverError) {
      return (
        <div className="alert alert-danger alert-dismissible fade in" role="alert">
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <span className="fa fa-exclamation-circle"></span> <strong>{errors.serverError}</strong>
          <p>Correct your form and submit it again.</p>
        </div>
      );
    }
  }

  //region ButtonGroupHandlers
  handleGenderPick(e, value) {
    this.gender = value;
  }

  handleLevelPick(e, value) {
    this.level = value;
  }
  //endregion

  // My first JS specific monster.
  resetForm() {
    const labels = ['age', 'height', 'weight', 'username'];
    labels.forEach((label) => {this.refs[label].getInputDOMNode().value = '';});
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const {age, weight, height} = this.refs;
    const {username} = this.refs;
    const {gender, level} = this;

    //TODO: Add username to user collection.
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

    // this.refs.age.getInputDOMNode().value = '';
    this.resetForm();

    submitUserInfo(userInfo);
  }
}

export default EditInfo;