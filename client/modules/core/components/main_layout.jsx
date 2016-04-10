import React, {Component} from 'react';
import Navigation from './common/navigation/navigation.jsx';
import InfoBar from './common/info-bar/info-bar.jsx';
import Footer from './common/footer/footer.jsx';

class MainLayout extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      fixed: false
    }
  }
  
  componentWillMount() {
    if(!this.props.ready) {
      NProgress.start();
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  
  componentWillUpdate(nextProps) {
    if(!this.props.ready && nextProps.ready) {
      NProgress.inc();
    }
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }
  
  handleScroll() {
    if(window.scrollY > 52) {
      this.setState({fixed: true});
    } else {
      this.setState({fixed: false});
    }
  }
  
  render() {
    if(this.props.ready)
      return (
        <div>
          <Navigation user={this.props.user} logout={this.props.logout} fixed={this.state.fixed} />
          <InfoBar user={this.props.user} fixed={this.state.fixed} />
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