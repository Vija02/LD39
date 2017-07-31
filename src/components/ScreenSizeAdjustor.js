import React, { Component } from 'react';

class ScreenSizeAdjustor extends Component {
  render() {
    if(document.documentElement.clientWidth / 16 > document.documentElement.clientHeight / 9){// Widescreen
      return(
        <div style={{display: "grid", gridTemplateColumns: "1fr 177.77vh 1fr", gridTemplateRows: "0 100vh 0"}}>
          {this.props.children}
        </div>
      );
    }
    return (
      <div style={{display: "grid", gridTemplateColumns: "0 100vw 0", gridTemplateRows: "0 56.25vw 0"}}>
        {this.props.children}
      </div>
  );
  }
}

export default ScreenSizeAdjustor;
