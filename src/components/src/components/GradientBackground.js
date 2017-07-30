import React from 'react';
import Svg, { Defs, LinearGradient, Stop, Rect} from 'react-native-svg';

export default class GradientBackground extends React.Component {
  render() {
    return (
      <Svg
        height="100%"
        width="100%"
        style={{position: "absolute"}}
      >
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="100%">
            <Stop offset="0" stopColor="#AA076B" stopOpacity="1" />
            <Stop offset="1" stopColor="#61045F" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
      </Svg>
    );
  }
}
