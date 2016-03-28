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
    console.log(this.props);
    let {errors} = this.props;
    errors = errors ? errors : {};
    let {nameValidation, descriptionValidation, tagsValidation, tipsValidation} = this.props;

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
                        ref="name"
                        type="text"
                        label="Workout name"
                        placeholder="Workout name"
                        help={errors.nameValidation ? errors.nameValidation.message : ""}
                        bsStyle={errors.nameValidation ? errors.nameValidation.status : null}
                        onBlur={(e) => nameValidation($(e.target).val())}/>


                      <Input
                        ref="description"
                        type="textarea"
                        label="Description"
                        placeholder="Description"
                        help={errors.descriptionValidation ? errors.descriptionValidation.message : ""}
                        bsStyle={errors.descriptionValidation ? errors.descriptionValidation.status : null}
                        onBlur={(e) => descriptionValidation($(e.target).val())}
                      />
                      <Input
                        ref="tags"
                        type="text"
                        label="Tags"
                        placeholder="Tags"
                        help={errors.tagsValidation ? errors.tagsValidation.message : ""}
                        bsStyle={errors.tagsValidation ? errors.tagsValidation.status : null}
                        onBlur={(e) => tagsValidation($(e.target).val())}
                      />
                      <Input
                        ref="tips"
                        type="textarea"
                        label="Tips and advices"
                        placeholder="The workout is too exhausting for beginners? Help them get through it :) "
                        help={errors.tipsValidation ? errors.tipsValidation.message : ""}
                        bsStyle={errors.tipsValidation ? errors.tipsValidation.status : null}
                        onBlur={(e) => tipsValidation($(e.target).val())}
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


  // TODO: validation and error setting
  handleSetupFormSubmit(e) {
    e.preventDefault();

    const {name, description, tags, tips} = this.refs;

    this.props.Actions.createWorkout({
      name: name.getValue(),
      description: description.getValue(),
      tags: tags.getValue(),
      tips: tips.getValue()
    });
  }
}

export default CreateWorkout;