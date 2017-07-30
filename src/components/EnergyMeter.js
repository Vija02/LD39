import React, { Component } from 'react';
import { View } from 'react-primitives';
import { Animated } from 'react-native-web';

const maxEnergy = 150;

class EnergyMeter extends Component {
  constructor(props){
    super(props);
    this.state = {
      energy: new Animated.Value(props.energy)
    }
  }
  componentWillUpdate(nextProps){
    // Why take the time to animate this? idk tbh -w-
    Animated.timing(this.state.energy, {toValue: nextProps.energy}).start();
  }
  render() {
    return(
      <View style={{
        position: "absolute",
        top: "2vw",
        left: "2vw",
        right: "2vw",
        height: "1.5vw",
        backgroundColor: "grey",
        borderRadius: 10,
        opacity: 0.7
      }}>
        <Animated.View style={{
          borderRadius: 10,
          backgroundColor: "red",
          width: this.state.energy.interpolate({
            inputRange: [0, maxEnergy],
            outputRange: ["0%", "100%"],
          }),
          height: "100%"
        }}/>
      </View>
    )
  }
}

export default EnergyMeter;
