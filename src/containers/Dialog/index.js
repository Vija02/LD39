import React, { Component } from 'react';
import { View, Text } from 'react-primitives'
import Typist from 'react-typist';
import RefreshRedirect from 'components/RefreshRedirect';

import PressToContinue from 'components/PressToContinue';

import DialogText from './DialogText.json'

class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      finished: false,
      redirect: null,
      currentLine: 0
    }
  }
  componentWillMount(){
    this.redirectAdd("0");
  }
  // If keyboard or mouse
  onProgress(){
    if(!this.state.finished){
      this.onTypingDone()
    }else{
      if(DialogText[this.props.match.params.dialog].length - 1 === this.state.currentLine){
        this.redirectAdd('done')
      }else{
        this.setState({currentLine: this.state.currentLine + 1, finished: false})
        this.redirectAdd(this.state.currentLine + 1);
      }
    }
  }
  onTypingDone(){
    this.setState({finished: true})
  }
  redirect(){
    if(this.props.match.params.origin){
      this.setState({redirect: `/${this.props.match.params.origin}`});
    }else{
      this.setState({redirect: '/'});
    }
  }
  redirectAdd(path){
    if(this.props.match.params.origin){
      this.setState({redirect: `/${this.props.match.params.origin}/${this.props.match.params.dialog}/` + path});
    }else{
      this.setState({redirect: `/${this.props.match.params.dialog}/` + path});
    }
  }
  render() {
    // Omg so much absolutes, but no time to fix >.>
    return(
      <View style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}>
        {
          this.state.redirect ? <RefreshRedirect to={this.state.redirect} /> : null
        }
        {/* Overlay */}
        <View style={{
          position: "absolute",
          zIndex: 1000000, // xd
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
          tabIndex="0"
          onClick={() => {this.onProgress()}}
          onKeyDown={() => {this.onProgress()}}>
        </View>

        {/* Dialog box */}
        <View style={{
          position: "absolute",
          top: "43.75vw",
          left: "2vw",
          right: "2vw",
          bottom: "2vw",
          backgroundColor: "#404040",
          borderRadius: "5",
          padding: 20,
          border: "0.1px solid rgba(255, 255, 255, 0.25)"
        }}>
          {
            this.state.finished
            ?
            <Text style={{color: "white"}}>
              {DialogText[this.props.match.params.dialog][this.state.currentLine]}
              <PressToContinue />
            </Text>
            :
            <Typist style={{color: "white"}} cursor={{show: false}} onTypingDone={() => {this.onTypingDone()}}>
              {DialogText[this.props.match.params.dialog][this.state.currentLine]}
            </Typist>
          }
        </View>
      </View>
    )
  }
}

export default Index;
