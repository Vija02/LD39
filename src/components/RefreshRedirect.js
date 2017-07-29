import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

class RefreshRedirect extends Component {
  render() {
    return(
      <Switch>
        <Route path={this.props.to} exact render={() => {
          return null
        }} />
        <Redirect to={this.props.to} />
      </Switch>
    )
  }
}

export default RefreshRedirect;
