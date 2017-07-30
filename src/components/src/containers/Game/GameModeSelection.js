import React from 'react';
import { View, Text, Button } from 'react-native';

export default class GameModeSelection extends React.Component {
  render() { //TODO: Probably gonna add 1 more layer for level selection
    return (
      <View style={{flex: 1, flexDirection: "column", alignItems: "center"}}>
        <Text>Select Gamemode</Text>
        <Button title="Standard" onPress={() => {this.props.history.push('/game/standard/1')}} />
      </View>
    );
  }
}
