import React from 'react';
import Component from '/client/modules/core/components/common/component.jsx';
import Message from '../../common/message.jsx';
import {Grid, Row, Col, Panel, Input, ButtonGroup, ButtonInput} from 'react-bootstrap';

class EditInfo extends Component {
  constructor(props) {
    super(props);

    this.inputLabels = ['age', 'height', 'weight', 'username'];
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
      <Grid>
        <Row>
          <Col md={12}>
            <Panel>
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
                  <ButtonGroup ref="gender" className="form-group" data-toggle="buttons">
                    <label onClick={e => this.handleGenderPick(e, "male")} className="male btn btn-default">
                      <input name="gender" value="male" type="radio"/>Male
                    </label>
                    <label onClick={e => this.handleGenderPick(e, "female")} className="female btn btn-default">
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
                  <ButtonGroup refs="level" className="form-group" data-toggle="buttons">
                    <label onClick={e => this.handleLevelPick(e, "beginner")}
                           className="beginner btn btn-default">
                      <input name="level" value="beginner" type="radio"/>Beginner
                    </label>
                    <label onClick={e => this.handleLevelPick(e, "intermediate")}
                           className="intermediate btn btn-default">
                      <input name="level" value="intermediate" type="radio"/>Intermediate
                    </label>
                    <label onClick={e => this.handleLevelPick(e, "advance")}
                           className="advance btn btn-default">
                      <input name="level" value="advanced" type="radio"/>Advanced
                    </label>
                  </ButtonGroup>

                  <ButtonInput className="pull-right" type="submit" value="Next"/>
                </form>

              </Col>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }

  componentDidMount() {
    NProgress.done();

    if (!this.loadUserData(this.props.getUserInfo())) {
      // Intentionally not turning it into a function.
      $(".male").addClass("active");
      this.handleGenderPick(null, "male");

      $(".beginner").addClass("active");
      this.handleLevelPick(null, "beginner");
    }
  }

  /**
   * Method loads the form with data user previously had
   * if he previously had any data to begin with.
   * @param currentUserData Object containing userInfo and username.
   * @returns {boolean} true if function changed something, false otherwise.
   */
  loadUserData(currentUserData) {
    if (!currentUserData) return false;

    // Accounts for weight, height, username, age
    this.inputLabels.forEach((label) => {
      if (currentUserData[label])
        this.refs[label].getInputDOMNode().value = currentUserData[label];
    });

    const {gender, level} = currentUserData;
    $(`.${gender}`).addClass("active"); // GUI
    this.handleGenderPick(null, gender); // Value

    $(`.${level}`).addClass("active"); // GUI
    this.handleLevelPick(null, level); // Value

    return true;
  }

  //region ButtonGroupHandlers
  handleGenderPick(e, value) {
    this.gender = value;
  }

  handleLevelPick(e, value) {
    this.level = value;
  }

  //endregion

  /**
   * Try-catch block is used because of profile-setup component.
   * There is a possibility of this component unmounting before
   * calling this function which causes all sorts of errors.
   */
  resetForm() {
    try {
      this.inputLabels.forEach((label) => {
        this.refs[label].getInputDOMNode().value = '';
      });
    } catch (err) {
      return;
    }
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

    submitUserInfo(userInfo, this.resetForm.bind(this), this.props.createCharacter);
  }
}

export default EditInfo;