import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import Background from './Background'

import { finishBandage } from 'actions/bandage'

class Bandage extends Component {
  constructor(props){
    super(props)
    this.isSolid = () => true
    this.interactable = () => true
    this.interact = (history) => {
      console.log("INTERACT WITH BANDAGE");
      history.push(`${history.location.pathname}/d_firstMed`);
    }
  }
  render(){
    return (
      <Switch>
        <Route exact path="/game/1/play/d_firstMed/done" render={() => {
          finishBandage({location: this.props.where.onMap});
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
