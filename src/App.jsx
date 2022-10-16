import React, { Component } from 'react';
import Product from './product';
import Posts from './posts';

class App extends Component {
  state = {}
  render() {
    return (
      <>
        {/* Add & Delete items */}
        {/* <Product /> */}
        {/* Search in Fake API */}
        <Posts />
      </>
    );
  }
}

export default App;