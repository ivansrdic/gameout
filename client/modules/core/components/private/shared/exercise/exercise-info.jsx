import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';

class ExercisesInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.handleExerciseInfoCloseClick.bind(this)} bsSize="lg">
        {this.renderExerciseInfo()}
      </Modal>
    );
  }

  renderExerciseInfo() {
    if (this.props.show) {
      const {exercise} = this.props;
      return (
        <div>
          <Modal.Header closeButton>
            <Modal.Title>{exercise.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{exercise.description}</p>

            {this.renderLink()}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleExerciseInfoCloseClick.bind(this)}>Close</Button>
          </Modal.Footer>
        </div>
      );
    }
  }

  handleExerciseInfoCloseClick() {
    this.props.closeExerciseInfo();
  }

  renderLink() {
    const {exercise} = this.props;
    if(exercise.link) {
      return (
        <div>
          <hr />

          <iframe id="exercise-info-content" type="text/html" width="100%" height="300px"
                  src={exercise.link}
                  frameBorder="0" allowFullScreen>
          </iframe>
        </div>
      );
    }
  }
}

export default ExercisesInfo;