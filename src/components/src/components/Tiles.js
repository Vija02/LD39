import React from 'react';
import { Rect, Polygon, G } from 'react-native-svg';

export default class Tiles extends React.Component {
  constructor(props){
    super(props);
    // d = x root 2
    // x = d / root 2
    this.side = props.diagonal / Math.sqrt(2);
  }
  render() {
    const { x, y, diagonal, ...other } = this.props;
    const side = this.side;
    // 1 Step is half a diagonal
    // The step is multiplied with current point to get the location
    const step = diagonal / 2;
    const depth = 1 / 2 * step;
    // originX={( (x-1) * step ) + step}
    // originY={( (y-1) * step )}
    return (
      <G>
        <Rect
          x={( (x-1) * step ) - ( side - step )}
          y={( (y-1) * step )}
          transform={`rotate(-45, ${( (x-1) * step ) + step}, ${(y-1) * step})`}
          height={side}
          width={side}
          rotate="-45"
          fill="#96EA2B"
          {...other}
        />
        <Polygon
          // Top left, bot left, bot right, top right
          points={`
            ${( (x-1) * step )},${( (y-1) * step + step)}
            ${( (x-1) * step )},${( (y-1) * step ) + step + depth}
            ${( (x-1) * step ) + step},${( (y-1) * step ) + diagonal + depth}
            ${( (x-1) * step ) + step},${( (y-1) * step ) + diagonal}
            `}
          fill="#71AD25"
        />
        <Polygon
          // Top left, bot left, bot right, top right
          points={`
            ${( (x-1) * step ) + step},${( (y-1) * step ) + diagonal}
            ${( (x-1) * step ) + step},${( (y-1) * step ) + diagonal + depth}
            ${( (x-1) * step + diagonal)},${( (y-1) * step ) + step + depth}
            ${( (x-1) * step + diagonal)},${( (y-1) * step + step)}
            `}
          fill="#71C804"
        />
      </G>
    );
  }
}
