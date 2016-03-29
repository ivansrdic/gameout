import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Input, ButtonInput} from 'react-bootstrap';

class CreateWorkout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    NProgress.done();
  }

  render() {
    const {errors} = this.props;
    const {nameValidation, descriptionValidation, unitValidation} = this.props;

    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Panel>
              <Col md={10} mdOffset={1}>
                <form onSubmit={this.handleSetupFormSubmit.bind(this)}>
                  <hr/>
                  <h1 className="text-center">Create workout</h1>

                  <Input
                    id="name"
                    ref="name"
                    type="text"
                    label="Workout name"
                    placeholder="Workout name"
                    help={errors.nameValidation ? errors.nameValidation.message : ""}
                    bsStyle={errors.nameValidation ? errors.nameValidation.status : null}
                    onBlur={() => nameValidation(this.refs.name.getValue())}/>

                  <Input
                    ref="description"
                    type="textarea"
                    label="Description"
                    placeholder="Description"
                    help={errors.descriptionValidation ? errors.descriptionValidation.message : ""}
                    bsStyle={errors.descriptionValidation ? errors.descriptionValidation.status : null}
                    onBlur={() => descriptionValidation(this.refs.description.getValue())}
                  />

                  <Input
                    ref="unit"
                    type="text"
                    label="Unit"
                    placeholder="Unit"
                    help={errors.unitValidation ? errors.unitValidation.message : ""}
                    bsStyle={errors.unitValidation ? errors.unitValidation.status : null}
                    onBlur={() => unitValidation(this.refs.unit.getValue())}
                  />

                  <ButtonInput className="pull-right" type="submit" value="Save"/>
                </form>
              </Col>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }

  handleSetupFormSubmit(e) {
    e.preventDefault();

    const {name, description, unit} = this.refs;

    const workout = {
      ownerId: this.props.user._id,
      name: name.getValue(),
      description: description.getValue(),
      unit: unit.getValue()
    };

    const {nameValidation, descriptionValidation, unitValidation} = this.props;

    nameValidation(workout.name);
    descriptionValidation(workout.description);
    unitValidation(workout.unit);

    this.props.createWorkout(workout);
  }
}

export default CreateWorkout;