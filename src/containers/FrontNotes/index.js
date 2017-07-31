import React, { Component } from 'react';
import { View, Text } from 'react-primitives'

class Index extends Component {
  render() {
    return (
      <View style={{
        display: "flex",
        height: "100%",
        flex: 1,
        alignItems: "center",
        backgroundColor: "black",
        color: "white"
      }}>
        <Text style={{fontFamily: "'Dancing Script', cursive", fontSize: "4em", paddingTop: 15}}>The Last</Text>
        <Text style={{paddingTop: 5}}>Ludum Dare #39</Text>
        <Text style={{paddingTop: 20, fontSize: "0.7em"}}>Change font size by zooming in and out</Text>
        <Text style={{paddingTop: 5, fontSize: "0.7em"}}>Move around by using WASD or Arrow keys</Text>
        <Text style={{paddingTop: 5, fontSize: "0.7em"}}>For best experience, set the browser in full screen mode (F11)</Text>
        <br />
        <Text style={{paddingTop: 5, fontSize: "0.7em"}}>This game uses a relatively new feature in the browser. If things look off, you need to get another browser. Eg: Chrome 58+ or Firefox 52+</Text>
        <br />
        <button onClick={() => {this.props.history.push('/d_opening')}}>Start</button>
      </View>
    );
  }
}

export default Index;
