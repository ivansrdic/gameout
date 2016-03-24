import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Input, ButtonGroup, ButtonInput} from 'react-bootstrap';
import Actions from '/client/modules/core/actions';

class CreateWorkoutGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
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
                                    type="text-left"
                                    label="Group workout name"
                                    placeholder="Group workout name"
                                    value={this.state.name}
                                    onChange={this.handleNameChange.bind(this)}
                                />
                                <Input
                                    type="textarea"
                                    label="Description"
                                    placeholder="Description"
                                    value={this.state.description}
                                    onChange={this.handleDescriptionChange.bind(this)}
                                />
                                <ButtonInput onClick={ ()=> this.setState({ open: !this.state.open })}>
                                    Workout list
                                </ButtonInput>
                                <Panel collapsible expanded={this.state.open}>
                                    Ovdje treba ici neka element koji ima selectable listu <br/>
                                    Trebao bi bit selectable ili samo hover kada pređe preko a <br/>
                                    A desno kao plus pa se doda u Selected workouts <br/>
                                </Panel>
                                </form>
                        </Col>
                        <Col md={6}>
                                <Panel header="Selected workouts">
                                    Ovdje nekako ubaciti popis odabranih vježbi <br />
                                    Vježba 2<br />
                                    Vježba 3<br />
                                    <br />
                                    <ButtonInput className="pull-right"  value="CreateWorkout">
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

    handleNameChange(e) {
        this.setState({
            name: $(e.target).val()
        });
    }

    handleDescriptionChange(e) {
        this.setState({
            description: $(e.target).val()
        });
    }

    // TODO: validation and error setting
    handleSetupFormSubmit(e) {
        e.preventDefault();

        Actions.Workouts.createWorkout({
            name: this.state.name,
            description: this.state.description,
        });
    }
}

export default CreateWorkoutGroup;