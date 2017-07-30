import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import Background from './Background'

import { finishBandage } from 'actions/bandage'
import { setEnergy } from 'actions/energy'

class Bandage extends Component {
  constructor(props){
    super(props)
    this.isSolid = () => true
    this.interact = (history, x, y) => {
      const filteredState = this.props.bandage.bandages.filter((item) => item.location.x === x && item.location.y === y)
      if(filteredState.length === 0){
        history.push(`${history.location.pathname}/d_firstMed`);
        return;
      }
      history.push(`${history.location.pathname}/d_usedMed`);
    }
  }
  render(){
    return (
      <Switch>
        <Route exact path="/game/1/play/d_firstMed/done" render={() => {
          finishBandage({location: this.props.where.onMap});
          setEnergy(150);
          return <Redirect to="/game/1/play" />
        }} />
        <Route exact path="/game/1/play/d_usedMed/done" render={() => {
          return <Redirect to="/game/1/play" />
        }} />
        <Background {...this.props} />
      </Switch>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bandage: state.bandage,
  };
};

export default connect(mapStateToProps, null, null, { withRef: true })(Bandage);
