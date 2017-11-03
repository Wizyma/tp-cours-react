import React, { Component } from 'react';
import Home from './components/home'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
