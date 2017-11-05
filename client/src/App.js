import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home'
import NotFound from './components/notfound'
import Single from './components/single'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-intro">
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/single/:id' component={Single}></Route>
            <Route render={() => <NotFound />}></Route>
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
