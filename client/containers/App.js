import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';

class App extends React.Component {

  render() {
    let { children } = this.props;

    return(
      <div>
        <Navbar />
        <div>
          { children }
        </div>
      </div>
    );
  }
}

export default connect()(App);
