import React, { Component } from 'react';
import { View, Text } from 'react-primitives';

class Index extends Component {
  render() {
    return (
      <View style={{display: "grid", backgroundColor: "#3b0000", gridTemplate: "repeat(4, 1fr)/1fr 2fr 1fr", height: "100%"}}>
        <View style={{textAlign: "center", gridRow: "2/3", gridColumn: "2/3", alignSelf: "center"}}>
          <Text style={{color: "white", fontSize: "2em"}}>Whoops...</Text>
          <Text style={{color: "white", fontSize: "3em"}}>You ran out of power and died</Text>
        </View>
        <button style={{gridRow: "3/4", gridColumn: "2/3", height: "50%", width: "50%", alignSelf: "center", justifySelf: "center", fontSize: "2em"}}
          onClick={() => {
            window.location.replace('/');
          }}
        >Restart</button>
      </View>
    );
  }
}

export default Index;
