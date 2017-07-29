import React, { Component } from 'react';
import { Animated } from 'react-native-web';

class PressToContinue extends Component {
  constructor(props){
    super(props);
    this.state = {
      anim: new Animated.Value(0)
    }
  }
  componentDidMount(){
    this.runAnimation()
  }
  runAnimation(){
    if(this.state.anim._value === 0){
      Animated.timing(this.state.anim, {toValue: 0.5, duration: 1500}).start(() => {this.runAnimation()});
    }else{
      Animated.timing(this.state.anim, {toValue: 0, duration: 1500}).start(() => {this.runAnimation()});
    }
  }
  render() {
    return(
      <Animated.View style={{opacity: this.state.anim}}> Press to continue...</Animated.View>
    )
  }
}

export default PressToContinue;
