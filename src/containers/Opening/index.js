import React, { Component } from 'react';
import { View } from 'react-primitives'
import { Redirect, Route } from 'react-router-dom'

import tree from 'assets/tree.png'
import moon from 'assets/moon.png'
import stickman0 from 'assets/stickman0.png'
import stickman1 from 'assets/stickman1.png'
import stickman2 from 'assets/stickman2.png'
import stickman3 from 'assets/stickman3.png'

class Index extends Component {
  render() {
    return (
      <View style={{display: "grid", gridTemplateRows: "repeat(9, 6.25vw)", gridTemplateColumns: "repeat(16, 6.25vw)"}}>
        <Redirect to="/d_opening" />
        <Route path="/d_opening/([0-5])" render={() => {
          return <img src={stickman0} alt="" style={{gridRow: "3/7", gridColumn: "6/13", zIndex: 50, width: "100%"}} />
        }} />
        <Route path="/d_opening/([6])" render={() => {
          return <img src={stickman1} alt="" style={{gridRow: "3/7", gridColumn: "7/14", zIndex: 50, width: "100%"}} />
        }} />
        <Route path="/d_opening/([7-9])" render={() => {
          return <img src={stickman2} alt="" style={{gridRow: "3/7", gridColumn: "7/14", zIndex: 50, width: "100%"}} />
        }} />
        <Route path="/d_opening/(1[0-9])" render={() => {
          return <img src={stickman3} alt="" style={{gridRow: "3/7", gridColumn: "10/16", zIndex: 50, width: "100%"}} />
        }} />
        <Route path="/d_opening/done" render={() => {
          return <Redirect to="/game" />
        }} />

        <img src={moon} alt="" style={{gridRow: "2/4", gridColumn: "15/17", width: "100%"}}/>
        <img src={tree} alt="" style={{gridRow: "1/7", gridColumn: "6/14", width: "100%"}}/>
        <img src={tree} alt="" style={{gridRow: "2/7", gridColumn: "2/6", width: "100%"}}/>
        <div style={{gridRow: "7/10", gridColumn: "1/15", backgroundColor: "rgb(14, 5, 1)"}}></div>
      </View>
    );
  }
}

export default Index;
