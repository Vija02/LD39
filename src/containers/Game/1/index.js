import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom'

import PlayArea from './PlayArea';

import { rotateMovement } from 'actions/movement'

import NameInput from 'components/NameInput'
import EnergyMeter from 'components/EnergyMeter'
import EnergyDarkener from 'components/EnergyDarkener'

class Index extends Component {
  constructor(props){
    super(props)
    this.state = {redirect: null}
  }
  componentDidMount(){
    setInterval(() => {
      rotateMovement(1, 6);
    }, 900)
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

        {/* Should probably map this... */}
        <Route exact path="/game/1/play/d_die_1/done" render={() => {
          return <Redirect to="/game/1/play" />
        }} />
        <Route exact path="/game/1/play/d_huge_cave/done" render={() => {
          return <Redirect to="/game/1/play" />
        }} />
        <Route exact path="/game/1/play/d_bones/done" render={() => {
          return <Redirect to="/game/1/play" />
        }} />
        <Route exact path="/game/1/play/d_omg/done" render={() => {
          return <Redirect to="/game/1/play" />
        }} />
        <Route exact path="/game/1/play/d_unending/done" render={() => {
          return <Redirect to="/game/1/play" />
        }} />
        <Route exact path="/game/1/play/d_passTrap/done" render={() => {
          return <Redirect to="/game/1/play" />
        }} />
        <Route exact path="/game/1/play/d_looksLikeTrap/done" render={() => {
          return <Redirect to="/game/1/play" />
        }} />
        <Route exact path="/game/1/play/d_needCareful/done" render={() => {
          return <Redirect to="/game/1/play" />
        }} />
        <Route exact path="/game/1/play/d_pattern/done" render={() => {
          return <Redirect to="/game/1/play" />
        }} />
        <Route exact path="/game/1/play/d_prepare/done" render={() => {
          return <Redirect to="/game/1/play" />
        }} />
        <Route exact path="/game/1/play/d_lotsOfEffort/done" render={() => {
          return <Redirect to="/game/1/play" />
        }} />


        <EnergyDarkener energy={this.props.energy} />
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
