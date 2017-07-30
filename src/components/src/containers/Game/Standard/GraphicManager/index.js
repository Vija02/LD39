import React from 'react';
import { G } from 'react-native-svg';
import { Route, Switch } from 'react-router-dom';

import Tiles from '../../../../components/Tiles';

export default class Index extends React.Component {
  // Sort to make sure the tile overlay the top tile
  sortFunction(a, b){
    if((a.x > b.x && a.y > b.y) || (a.x < b.x && a.y > b.y)){ // either bot left/bot right
      return 1; // But it after b
    }
    return 0;
  }
  render() {
    return (
      <Switch>
        <Route path="/game/standard/:level/:coords(\d,\d)+" render={({match}) => {
          if(this.props.diagonal === 0 || !match.params.coords){
            return null;
          }
          const tiles = match.params.coords.split('/')
          const tileObjectArray = tiles.map((tile) => {
            const tileArr = tile.split(',')
            return {x: parseInt(tileArr[0], 10), y: parseInt(tileArr[1], 10)}
          })
          const tileArray = tileObjectArray.sort(this.sortFunction).map((tileObject, i) => {
            return <Tiles key={i} x={tileObject.x} y={tileObject.y} diagonal={this.props.diagonal} />
          })
          return <G>{tileArray}</G>
        }} />
      </Switch>
    );
  }
}
