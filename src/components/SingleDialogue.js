import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Background from './Background'

class SingleDialogue extends Component {
  constructor(props){
    super(props)
    this.isSolid = () => true
    this.interact = (history, x, y) => {
      history.push(`${history.location.pathname}/${this.props.name}`);
    }
  }
  render(){
    return (
      <Switch>
        <Route exact path={`/:stuff*/${this.props.name}/done`} render={({match}) => {
          return <Redirect to={`/${match.params.stuff}`} />
        }} />
        <Background {...this.props} />
      </Switch>
    )
  }
}

export default SingleDialogue
