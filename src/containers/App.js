import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { View } from 'react-primitives';
import { MemoryRouter as Router, Route, Switch } from 'react-router-dom'

import Opening from './Opening'
import Game from './Game'
import Dialog from './Dialog'
import Dead from './Dead'
import Win from './Win'

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store} >
        <Router>
          <View style={{width: "100vw", height: "56.25vw", background: "linear-gradient(to bottom, #0f121e 0%,#172533 100%)"}}>
            {/* GOT NO MORE TIME */}
            <Switch>
              <Route path="/dead" component={Dead} />
              <Route path="/game" component={Game} />
              <Route path="/" component={Opening} />
            </Switch>
            <Switch>
              <Route path="/game/1/play/d_doorLock/0/win" component={Win} />
              <Route path="/:origin*/:dialog(d_[a-zA-Z1-9_]+)/:line?" component={Dialog} />
            </Switch>
          </View>
        </Router>
      </Provider>
    );
  }
}

export default App;
