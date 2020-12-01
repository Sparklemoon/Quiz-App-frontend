import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "./pages/home";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
        <div>
          <h2>Hello</h2>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
        </BrowserRouter>
        
      </div>
    );
  }
}
