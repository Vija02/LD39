import React, { Component } from 'react';

class Background extends Component {
  constructor(props){
    super(props)
    this.isSolid = () => this.props.solid ? true : false
  }
  render() {
    if(this.props.color){
      return <div style=
        {{
          width: "100%",
          backgroundColor: this.props.color,
          ...this.props.style
        }} />
    }
    return(
      <img alt=""
        src={this.props.src}
        style=
          {{
            width: "100%",
            ...this.props.style
          }}
      />
    )
  }
}

export default Background;
