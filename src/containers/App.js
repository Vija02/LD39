import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { View } from 'react-primitives';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Opening from './Opening'
import Game from './Game'
import Dialog from './Dialog'

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store} >
        <Router>
          <View style={{width: "100vw", height: "56.25vw", background: "linear-gradient(to bottom, #0f121e 0%,#172533 100%)"}}>
            <Switch>
              <Route path="/game" component={Game} />
              <Route path="/" component={Opening} />
            </Switch>
            <Route path="/:origin*/:dialog(d_[a-zA-Z]+)/:line?" component={Dialog} />
          </View>
        </Router>
      </Provider>
    );
  }
}

export default App;
