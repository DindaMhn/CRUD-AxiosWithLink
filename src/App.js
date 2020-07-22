import React, { Component } from 'react';
import './App.css';
import Navigation from './containers/Navigation';
import SamplePropTypes from './containers/SamplePropTypes';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        {/* <SamplePropTypes/> */}
        <BrowserRouter>
          <Navigation/>
        </BrowserRouter>
        
      </div>
    );
  }
}
export default App;
