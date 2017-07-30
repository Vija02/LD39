import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom'

import PlayArea from './PlayArea';

import NameInput from 'components/NameInput'

class Index extends Component {
  constructor(props){
    super(props)
    this.state = {redirect: null}
  }
  render() {
    return (
      <div>
        <Route exact path="/game/1" render={() => {
          return <Redirect to="/game/1/d_prologue" />
        }} />

        <Route path="/game/1/d_prologue/(4)" component={NameInput} />
        <Route path="/game/1/name/" render={() => {
          return <Redirect to="/game/1/d_name" />
        }} />

        <Route exact path="/game/1/d_name/done" render={() => {
          return <Redirect to="/game/1/play" />
        }} />
        <Route path="/game/1/play" component={PlayArea} />
      </div>
    );
  }
}

export default Index;
