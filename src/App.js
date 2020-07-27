import React, { Component } from 'react';
import './App.css';
import Navigation from './containers/Navigation';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navigation/>
        </BrowserRouter>
        
      </div>
    );
  }
}
export default App;
