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