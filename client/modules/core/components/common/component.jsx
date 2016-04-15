import React, {Component} from 'react';

class CustomComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    if(this.props.clearState) this.props.clearState();
  }
}

export default CustomComponent;