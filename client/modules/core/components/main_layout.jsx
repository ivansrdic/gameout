import React, {Component} from 'react';
import Navigation from './common/navigation/navigation.jsx';
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
  
  componentWillUpdate(nextProps) {
    if(!this.props.ready && nextProps.ready) {
      NProgress.inc();
    }
  }
  
  render() {
    if(this.props.ready)
      return (
        <div>
          <Navigation user={this.props.user} logout={this.props.logout}/>
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

export default MainLayout;