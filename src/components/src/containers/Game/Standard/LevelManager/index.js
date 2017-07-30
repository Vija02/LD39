import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LevelList from './LevelList.json'

import Manager from './Manager';

export default class Index extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/game/standard/:level" strict exact render={({match}) => {
          return <Redirect to={`/game/standard/${match.params.level}/`} />
        }} />
        <Route path="/game/standard/:level" render={(props) => {
          const levelArray = LevelList[props.match.params.level];
          if(!levelArray){
            console.log("No more level");
            return null;
          }
          return <Manager level={levelArray} {...props} {...this.props} />
        }} />
      </Switch>
    );
  }
}
