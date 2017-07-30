import React from 'react';
import { View } from 'react-native';
import GradientBackground from '../components/GradientBackground';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Game from './Game';
import MainMenu from './MainMenu';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <View style={{
          flex: 1,
          backgroundColor: "#77ecff"
        }}>
          <GradientBackground />
          <Switch>
            <Route exact path="/" component={MainMenu} />
            <Route path="/game" component={Game} />
            <Route path="/" render={() => <Redirect to='/' />} />
          </Switch>
        </View>
      </Router>
    );
  }
}
