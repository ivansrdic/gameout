import React, {Component} from 'react';
import Navigation from './common/navigation/navigation.jsx';
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
        <Navigation/>
        <div style={{marginTop: 20}}>
          {this.props.content()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default PublicLayout;