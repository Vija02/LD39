import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import RefreshRedirect from 'components/RefreshRedirect'

import Stage1 from './1'

class Index extends Component {
  constructor(props){
    super(props)
    this.state = {redirect: null}
  }
  componentWillMount(){
    if(this.props.match.isExact){
      setTimeout(() => {this.setState({redirect: "/game/1"})}, 3000)
    }
  }
  render() {
    return (
      <div style={{width: "100%", height: "100%"}}>
        {
          this.state.redirect ? <RefreshRedirect to={this.state.redirect} /> : null
        }
        <Route exact path="/game/" render={() => {
          return <div style={{backgroundColor: "black", width: "100%", height: "100%"}} />
        }} />

        <Route path="/game/1" component={Stage1} />
      </div>
    );
  }
}

export default Index;
