import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "./pages/home";
import Quiz from "./pages/quiz";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
        <div>
  
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/quiz" component={Quiz} />
          </Switch>
        </div>
        </BrowserRouter>
        
      </div>
    );
  }
}
