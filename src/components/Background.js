import React, { Component } from 'react';

class Background extends Component {
  render() {
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
