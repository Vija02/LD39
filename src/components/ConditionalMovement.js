import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class ConditionalMovement extends Component {
  constructor(props){
    super(props)
    this.isSolid = () => this.props.solid ? true : false
    this.event = (history) => {
      if(this.props.condition() === 1){
        this.props.cb(history);
      }
    }
  }
  render(){
    // If render location at player
    if(this.props.condition() === 1 && this.props.where.onMap.x === this.props.player.current.x && this.props.where.onMap.y === this.props.player.current.y){
      // Maybe next time can abstract this
      return <Redirect to="/dead" />
      // Handle the legs
    }else if(this.props.condition() === 1 && this.props.where.onMap.x === this.props.player.tail.x && this.props.where.onMap.y === this.props.player.tail.y){
      // Maybe next time can abstract this
      return <Redirect to="/dead" />
    }
    const num = this.props.condition()
    return React.cloneElement(this.props.element[num], {
      ...this.props
    })
  }
}
const mapStateToProps = (state) => { // Instead of passing from Block.js, can just state the step and no need condition
  // For now needed to refresh when changed
  return {
    movement: state.movement.step,
  };
};

export default connect(mapStateToProps, null, null, { withRef: true })(ConditionalMovement);
