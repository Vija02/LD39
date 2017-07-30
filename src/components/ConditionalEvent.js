import React, { Component } from 'react';

class ConditionalEvent extends Component {
  constructor(props){
    super(props)
    this.isSolid = () => this.props.solid ? true : false
    this.event = (history) => {
      this.props.cb(history);
    }
  }
  render(){
    const num = this.props.condition()
    return React.cloneElement(this.props.element[num], {
      ...this.props
    })
  }
}

export default ConditionalEvent;
