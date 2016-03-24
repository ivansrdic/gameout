import {composeWithTracker} from 'mantra-core';
import React, {Component} from 'react';
import Navigation from '../components/common/navigation/navigation.jsx';
import Footer from '../components/common/footer/footer.jsx';

class PrivateLayout extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    if(!this.props.ready) {
      NProgress.start();
    }
  }
  
  componentWillReceiveProps(nextProps, nextState) {
    if(nextProps.ready) {
      NProgress.inc();
    }
  }
  
  render() {
    if(this.props.ready)
      return (
        <div>
          <Navigation user={this.props.user} />
          {this.props.content(this.props.user)}
          <Footer />
        </div>
      );
    else
      return (
        <div></div>
      );
  }
}

export function composer(props, onData) {
  const subUser= Meteor.subscribe('user');
  
  if (subUser.ready()) {
    const data = {
      ready: true,
      user: Meteor.user()
    };
    onData(null, data);
  } else {
    onData(null, {ready: false});
  }
}

export default composeWithTracker(composer)(PrivateLayout);