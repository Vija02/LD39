import React from 'react';
import { View, Text, Button } from 'react-native';

export default class Index extends React.Component {
  onPlay(){
    this.props.history.push('game')
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "space-between", margin: 40}}>
        <Text style={{fontSize: 30}}>Qu1ck!</Text>
        <View style={{width: "100%"}}>
          <Button title="Play!" onPress={() => {this.onPlay()}} />
        </View>
      </View>
    );
  }
}
