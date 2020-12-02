import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "./pages/home";
import Quiz from "./pages/quiz";
import Results from "./pages/results"

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      score: 0
    }

    this.handleScoreUpdate = this.handleScoreUpdate.bind(this)
    this.handleScoreReset = this.handleScoreReset.bind(this)
  }
handleScoreUpdate(amount) {
  this.setState({ score: this.state.score + amount })
} 


handleScoreReset() {
  if (this.state.score !== 0) {
    this.setState({ score: 0 })
  }
  
}

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
        <div>
  
          <Switch>
            <Route exact path="/" render={(props) => <Home handleScoreReset={this.handleScoreReset} {...props}/>} />
            <Route path="/quiz" render={(props) => <Quiz handleScoreUpdate={this.handleScoreUpdate} {...props}/>} />
            <Route path="/results" render={(props) => <Results score={this.state.score} {...props}/>}/>
          </Switch>
        </div>
        </BrowserRouter>
        
      </div>
    );
  }
}
