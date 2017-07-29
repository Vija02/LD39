import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'

import PlayArea from './PlayArea';

class Index extends Component {
  constructor(props){
    super(props)
    this.state = {redirect: null}
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/game/1" render={() => {
            return <Redirect to="/game/1/d_prologue" />
          }} />
          <Route path="/game/1/play" component={PlayArea} />
        </Switch>
      </div>
    );
  }
}

export default Index;
