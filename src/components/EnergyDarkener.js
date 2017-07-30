import React, { Component } from 'react';
import { Animated } from 'react-native-web';

const maxEnergy = 150;

class EnergyDarkener extends Component {
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
      <Animated.View style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "#4e0000",
        opacity: this.state.energy.interpolate({
          inputRange: [0, maxEnergy],
          outputRange: [0.5, 0],
        })
      }} />
    )
  }
}

export default EnergyDarkener;
