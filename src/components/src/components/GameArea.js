import React from 'react';
import { View } from 'react-native'

import Canvas from './Canvas';

export default class GameArea extends React.Component {
  constructor(props){
    super(props);
    this.border = 15;
    this.state = {size: {horizontal: 0, vertical: 0, diagonal: 0}};
  }
  render() {
    const { LevelManager, GraphicManager } = this.props;
    if(!LevelManager || !GraphicManager) return null;

    return(
      <View>
        {this.props.children}
        <View style={{
          marginTop: this.state.size.vertical,
          marginBottom: this.state.size.vertical,
          marginLeft: this.state.size.horizontal,
          marginRight: this.state.size.horizontal,
        }}>
          {
            // Don't render if diagonal not yet calculated
            this.state.size.diagonal ?
            <LevelManager offset={{x: this.state.size.horizontal, y: this.state.size.vertical}}
              diagonal={this.state.size.diagonal}
            /> : null
          }
          <Canvas border={this.border} onSize={(size) => { this.setState(size); }}>
            <GraphicManager diagonal={this.state.size.diagonal} />
          </Canvas>
        </View>
      </View>
    )
  }
}
