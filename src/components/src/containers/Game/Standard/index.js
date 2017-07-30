import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Text } from 'react-native';

import GameArea from '../../../components/GameArea';
import LevelManager from './LevelManager'
import GraphicManager from './GraphicManager'

export default class Index extends React.Component {
  render() { // TODO: Probably gonna add level chooser here
    return (
      <Switch>
        <Route path="/game/standard/:level" render={({match}) => {
          return (
            <GameArea LevelManager={LevelManager} GraphicManager={GraphicManager}>
              <Text style={{position: "absolute", fontSize: "100vw"}}>{match.params.level}</Text>
            </GameArea>
          )
        }} />
        <Redirect to="/game/standard/1" />
      </Switch>
    );
  }
}
