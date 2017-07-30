import React, { Component } from 'react';
import { Text } from 'react-primitives'
import { Redirect } from 'react-router-dom'

import { setName } from 'actions/name'

class NameInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      done: false,
      preventedFast: 0
    }
  }
  componentDidMount(){
    this.input.focus();
  }
  onSubmit(e){
    e.preventDefault();
    let name = this.state.name;
    if(this.state.name === ""){
      if(this.state.preventedFast < 2){
        this.setState({preventedFast: this.state.preventedFast + 1});
        return;
      }
      name = "LD#39 Player"
    }
    setName(name);
    this.setState({done: true})
  }
  render() {
    return(
      <div // blocker
        style={{
          position: "absolute",
          zIndex: 1000000, // xd
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        {
          this.state.done?
          <Redirect to="/game/1/name" />: null
        }
        <div
          style={{position: "absolute", top: "25vw", left: "30vw", right: "30vw", textAlign: "center"}}
        >
          <Text style={{color: "white"}}>Enter Name</Text>
          <form onSubmit={this.onSubmit.bind(this)}>
            <input style={{width: "100%"}} ref={(ref) => {this.input = ref}} value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}} />
          </form>
        </div>
      </div>
    )
  }
}

export default NameInput;
