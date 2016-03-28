import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Input, ButtonInput} from 'react-bootstrap';

class CreateWorkoutGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    componentDidMount() {
        NProgress.done();
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col md={12}>
                        <Panel>
                            <h1 className="text-center">Create group of workouts</h1>
                            <hr/>
                            <Col md={6}>
                                <form onSubmit={this.handleSetupFormSubmit.bind(this)}>
                                    <Input
                                        ref="name"
                                        type="text-left"
                                        label="Group workout name"
                                        placeholder="Group workout name"
                                    />
                                    <Input
                                        ref="description"
                                        type="textarea"
                                        label="Description"
                                        placeholder="Description"
                                    />
                                    <ButtonInput onClick={ ()=> this.setState({ open: !this.state.open })}>
                                        Workout list
                                    </ButtonInput>
                                    <Panel collapsible expanded={this.state.open}>
                                        {this.showData()}
                                    </Panel>
                                </form>
                            </Col>
                            <Col md={6}>
                                <Panel header="Selected workouts">
                                    Ovdje nekako ubaciti popis odabranih vježbi <br />
                                    Vježba 2<br />
                                    Vježba 3<br />
                                    <br />
                                    <ButtonInput className="pull-right">
                                        +
                                    </ButtonInput>
                                </Panel>
                                <ButtonInput className="pull-right" type="submit" value="Save"/>
                            </Col>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }

    showData() {
      const workouts = this.props.Actions.listAllWorkouts();
      return (workouts.map(function (workout) {
            console.log(workout.name);
          }
      ));
    }

    // TODO: validation and error setting
    handleSetupFormSubmit(e) {
        e.preventDefault();

        const {name, description} = this.refs;

        this.props.Action.createWorkoutGroup({
            name: name.getValue(),
            description: description.getValue()
        });
    }
}

export default CreateWorkoutGroup;