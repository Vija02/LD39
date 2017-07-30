import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Text } from 'react-primitives'

class PasswordInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      password: "",
      status: "",
      win: false,
    }
  }
  componentDidMount(){
    this.input.focus();
  }
  onSubmit(e){
    e.preventDefault();
    let password = this.state.password;
    if(password === "") return;
    if(/fr[e3]+dom/i.exec(password)){
      this.setState({win: true})
    }else{
      this.setState({status: "Wrong Password!"})
    }
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
          this.state.return?
          <Redirect to="/game/1/play" />: null
        }
        {
          this.state.win?
          <Redirect to="/game/1/play/d_doorLock/0/win" />: null
        }
        <div
          style={{position: "absolute", top: "25vw", left: "30vw", right: "30vw", textAlign: "center"}}
        >
          <Text style={{color: "white"}}>Enter Password</Text>
          <p style={{color: "red", fontSize: "1em"}}>{this.state.status}</p>
          <form onSubmit={this.onSubmit.bind(this)}>
            <input style={{width: "100%"}} ref={(ref) => {this.input = ref}} value={this.state.password} onChange={(e) => {this.setState({password: e.target.value})}} />
          </form>
          <br/>
          <button onClick={() => {this.setState({return: true});}}>Return</button>
        </div>
      </div>
    )
  }
}

export default PasswordInput;
