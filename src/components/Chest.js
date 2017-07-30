import React, { Component } from 'react';
// import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import Background from './Background'

class Chest extends Component {
  constructor(props){
    super(props)
    this.isSolid = () => true
    this.interact = (history, x, y) => {
      history.push(`${history.location.pathname}/d_chest`);
    }
  }
  render(){
    return (
      <Switch>
        <Route exact path="/game/1/play/d_chest/done" render={() => {
          return <Redirect to="/game/1/play" />
        }} />
        <Background {...this.props} />
      </Switch>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     bandage: state.bandage,
//   };
// };

// export default connect(mapStateToProps, null, null, { withRef: true })(Chest);

export default Chest
