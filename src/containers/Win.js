import React, { Component } from 'react';
import { Animated } from 'react-native-web'
import { View } from 'react-primitives';

class Win extends Component {
  constructor(props){
    super(props);
    this.state = {overlay: new Animated.Value(0), overlayRendered: false}
  }
  componentDidMount(){
    Animated.timing(this.state.overlay, {toValue: 1, duration: 2500}).start(() => {
      this.setState({overlayRendered: true})
    });
  }
  render() {
    return (
      <Animated.View style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: this.state.overlay,
        backgroundColor: "white",
        zIndex: "100000000000"
      }}>
        {this.state.overlayRendered ?
          <View style={{
            textAlign: "center",
            padding: 100,
            fontSize: "3em"
          }}>
            The End
            <button onClick={() => {window.location.replace('/')}}>Replay?</button>
          </View>
        : null}
      </Animated.View>
    );
  }
}

export default Win;
