import React, {Component} from 'react';
import Navigation from './navigation/navigation.jsx';
import Footer from './footer/footer.jsx';

class PublicLayout extends Component {
  constructor(props) {
    super();

    this.props = props;
  }

  render() {
    return (
      <div>
        <Navigation />
          {this.props.content()}
        <Footer />
      </div>
    );
  }
}

export default PublicLayout;