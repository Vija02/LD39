import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Standard from './Standard';
import GameModeSelection from './GameModeSelection';

export default class Index extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/game/standard" component={Standard} />
        <Route exact path="/game/" component={GameModeSelection} />
        <Route path="/game/" render={() => <Redirect to='/game' />} />
      </Switch>
    );
  }
}
