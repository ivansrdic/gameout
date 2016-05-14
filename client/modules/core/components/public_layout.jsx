import React, {Component} from 'react';
import PublicNavigation from './common/navigation/public_navigation.jsx';
import Footer from './common/footer/footer.jsx';

class PublicLayout extends Component {
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
    $('body').css('backgroundImage', "url('full_page_background.png')");
  }


  render() {
    return (
      <div>
        <PublicNavigation />
        {this.props.content()}
        <Footer />
      </div>
    );
  }
}

export default PublicLayout;