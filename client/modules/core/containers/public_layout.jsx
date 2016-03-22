import {composeWithTracker} from 'mantra-core';
import React, {Component} from 'react';
import Navigation from './../components/navigation/navigation.jsx';
import Footer from './../components/footer/footer.jsx';

class PublicLayout extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if(!this.props.ready) {
      NProgress.start();
    }
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log(nextProps.ready);
    if(nextProps.ready) {
      NProgress.inc();
    }
  }

  render() {
    return (
      <div>
        <Navigation />
          {this.props.content(this.props.user)}
        <Footer />
      </div>
    );
  }
}

function composer(props, onData) {
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

export default composeWithTracker(composer)(PublicLayout);