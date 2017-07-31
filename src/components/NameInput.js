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
          display: "flex",
          flexDirection: "column",
          height: "100%",
          zIndex: 1000000, // xd
          // gridTemplateRows: "100%",
          // gridTemplateColumns: "100%",
          backgroundColor:"yellow"
        }}
      >
        {
          this.state.done?
          <Redirect to="/game/1/name" />: null
        }
        <Text style={{color: "white"}}>Enter Name</Text>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input style={{width: "100%"}} ref={(ref) => {this.input = ref}} value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}} />
        </form>
      </div>
    )
  }
}

export default NameInput;
