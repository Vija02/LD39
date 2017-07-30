import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom'

import PlayArea from './PlayArea';

import NameInput from 'components/NameInput'
import EnergyMeter from 'components/EnergyMeter'

class Index extends Component {
  constructor(props){
    super(props)
    this.state = {redirect: null}
  }
  render() {
    return (
      <div>
        <Route exact path="/game/1" render={() => {
          return <Redirect to="/game/1/d_prologue" />
        }} />

        <Route path="/game/1/d_prologue/(4)" component={NameInput} />
        <Route path="/game/1/name/" render={() => {
          return <Redirect to="/game/1/d_name" />
        }} />

        <Route exact path="/game/1/d_name/done" render={() => {
          return <Redirect to="/game/1/play" />
        }} />
        <Route path="/game/1/play" component={PlayArea} />/

        <EnergyMeter energy={this.props.energy} />
        {this.props.energy < 1 ? <Redirect to="/dead" />: null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    energy: state.energy.energy
  };
};

export default connect(mapStateToProps, null, null, { withRef: true })(Index);
