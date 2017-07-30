import React from 'react';
import { Dimensions } from 'react-native';
import Svg from 'react-native-svg';

// Generates and provides all kind of info about the canvas given the border size
export default class Canvas extends React.Component {
  constructor(props){
    super(props);
    // Calculate game board
    const { height, width } = Dimensions.get('window');
    this.height = height;
    this.width = width;

    const xScaleVal = height / 6;
    const yScaleVal = width / 4;

    if(xScaleVal >= yScaleVal){ // When scaled, width will hit border before height
      this.canvasWidth = ( width - (this.props.border * 2) );
      this.diagonal = this.canvasWidth / 4;
      this.canvasHeight = this.diagonal * 6;
    }else{ // height will hit border before width
      this.canvasHeight = ( height - (this.props.border * 2) );
      this.diagonal = this.canvasHeight / 6;
      this.canvasWidth = this.diagonal * 4;
    }
  }

  componentWillMount(){
    this.props.onSize && this.props.onSize({
      size: {
        vertical: (this.height - this.canvasHeight) / 2,
        horizontal: (this.width - this.canvasWidth) / 2,
        diagonal: this.diagonal
      }
    })
  }

  render() {
    return (
      <Svg
        width={this.canvasWidth}
        height={this.canvasHeight}
        // style={{backgroundColor: "red"}}
      >
        {this.props.children}
      </Svg>
    );
  }
}
