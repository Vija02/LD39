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
    const srcs = this.props.src.map((src, i) => {
      return (
        <img alt="" key={i}
          src={src}
          style=
          {{
            width: "100%",
            gridRow: "1/2",
            gridColumn: "1/2",
          }}
        />
      )
    })
    return (
      <div style=
        {{
          display: "grid",
          gridTemplateRows: "1fr",
          gridTemplateColumns: "1fr",
          ...this.props.style
        }}>{srcs}
      </div>
  );
  }
}

export default Background;
