import React, {Component} from 'react';
import Navigation from './common/navigation/navigation.jsx';
import ChangesMessage from '../containers/common/changes-message.js';
import Footer from './common/footer/footer.jsx';


class MainLayout extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    if(!this.props.ready) {
      NProgress.start();
    }
  }

  componentDidMount() {
    setTimeout(function() {
      $.material.init();
    }, 0);
  }

  componentWillUpdate(nextProps) {
    if(!this.props.ready && nextProps.ready) {
      NProgress.inc();
    }
    setTimeout(function() {
      $.material.init();
    }, 0);
  }
  
  render() {
    if(this.props.ready)
      return (
        <div>
          <Navigation user={this.props.user} logout={this.props.logout} private={true}/>
          <ChangesMessage></ChangesMessage>
          <div style={{marginTop: 100 + "px"}}>
            {this.props.content(this.props.user)}
          </div>
          <Footer />
        </div>
      );
    else
      return (
        <div></div>
      );
  }
}

export default MainLayout;