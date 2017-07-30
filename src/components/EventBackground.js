import React, { Component } from 'react';

import Background from './Background'

class EventBackground extends Component {
  constructor(props){
    super(props)
    this.isSolid = () => this.props.solid ? true : false
    this.event = (history) => {
      this.props.cb(history);
    }
  }
  render(){
    return (
      <Background {...this.props} />
    )
  }
}

export default EventBackground;
