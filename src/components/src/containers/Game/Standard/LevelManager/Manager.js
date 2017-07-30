import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { View, PanResponder } from 'react-native';

export default class Manager extends React.Component {
  constructor(props){
    super(props);
    this._levelProgress = null;
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handlePanShouldSetResponder.bind(this),
      // onMoveShouldSetPanResponder: () => false,
      onPanResponderGrant: this._handlePanResponderGrant.bind(this),
      onPanResponderMove: this._handlePanResponderMove.bind(this),
      onPanResponderRelease: this._handlePanResponderRelease.bind(this),
    });
    this.state = {redirect: null};
  }

  componentWillMount(){
    this._renderTiles(this.props.level[0]);
  }

  render() {
    return (
      <View style={{ width: "100%", height: "100%", position: "absolute", zIndex: 100 }}
        {...this._panResponder.panHandlers}
      >
        <Switch>
          <Route path={this.state.redirect} exact render={() => {
            return null
          }} />
          <Redirect to={this.state.redirect} />
        </Switch>
      </View>
    );
  }

  _handleWin(){
    console.log("WIN!!");
    this._levelProgress = null;
    this.setState({redirect: `/game/standard/${parseInt(this.props.match.params.level, 10) + 1}`})
  }
  _handleLose(){
    !!this._levelProgress && console.log("Lose :(");
    this._levelProgress = null;
    this._renderTiles(this.props.level[0]);
  }

  _handlePanShouldSetResponder(e, gestureState){
    return this._coordinateIsWithinTileLocations({x: e.nativeEvent.pageX, y: e.nativeEvent.pageY}, this.props.level[0])
  }
  _handlePanResponderGrant(e, gestureState){
    this._levelProgress = [...this.props.level];
    console.log("Game Start!!");
    this._renderTiles(this.props.level[0], this.props.level[1])
  }
  _handlePanResponderMove(e, gestureState){
    if(!this._levelProgress){
      return;
    }
    if(!this._levelProgress[1]){
      this._handleWin();
      return;
    }

    // Possible moves:
    // 1. Still on same tile -> no need to do anything
    // 2. Out of any tile -> handle Lose
    // 3. Move onto next tile -> update level progress
    const x = gestureState.moveX;
    const y = gestureState.moveY;

    let nextTiles = [this._levelProgress[1]];
    // Next tile is the one next on the array except if there's multiple path
    const levelArray = this._getShallowLevelArray(this._levelProgress[1]);
    nextTiles = levelArray ? levelArray : nextTiles;

    const onTile = this._coordinateIsWithinTileLocations({x, y}, this._levelProgress[0])
    const possibleTileLocation = this._coordinateIsWithinTileLocations({x, y}, ...nextTiles)
    const onPossibleTiles = Number.isInteger(possibleTileLocation) || possibleTileLocation ? true : false;

    // 2. Out of tile
    if(!(onTile || onPossibleTiles)){
      this._handleLose();
    }else if(!onTile && onPossibleTiles){ // 3. Move to next tile
      this._handleMoveToNextTile(possibleTileLocation);
    }
    // 1. ignore
  }
  _handlePanResponderRelease(e, gestureState){
    this._handleLose();
  }

  // Remove the previous element and render the next one
  _handleMoveToNextTile(possibleTileLocation){
    // Remove first element
    this._levelProgress.shift();
    if(Array.isArray(this._levelProgress[0])){
      this._levelProgress = [...this._levelProgress[0][possibleTileLocation]]
    }

    // If end of level, return
    if(!this._levelProgress[1]){
      return;
    }

    // Render tile (Array)
    const nextLevelArray = this._getShallowLevelArray(this._levelProgress[1])
    if(nextLevelArray){
      this._renderTiles(this._levelProgress[0], ...nextLevelArray);
      return;
    }
    // If not array, just render this and next tile
    if(!!this._levelProgress[1]){
      this._renderTiles(this._levelProgress[0], this._levelProgress[1])
    }else{ // End of level
      this._renderTiles(this._levelProgress[0])
    }
  }

  _renderTiles(...tileObjects){
    const tileStringArray = tileObjects.map((tileObject) => {
      return `${tileObject.x},${tileObject.y}`
    })
    const redirectLocation = tileStringArray.join('/');
    this.setState({redirect:`/game/standard/${this.props.match.params.level}/${redirectLocation}`});
  }

  /**
   * @param {Object} touchScreenSpaceObject {x, y}
   * @param {...Object} tileObjects {x: 1, y: 1}
   * @return {false|true} if tileObject.length === 1
   * @return {false|Integer} if tileObject.length > 1
   * Check if the coordinate touch is within the tile location given
   */
  _coordinateIsWithinTileLocations(touchScreenSpaceObject, ...tileObjects){
    const step = this.props.diagonal / 2;
    // Make sure location is canvas scoped
    const touchLocation = {x: touchScreenSpaceObject.x - this.props.offset.x, y: touchScreenSpaceObject.y - this.props.offset.y}
    const tileLocations = tileObjects.map((tileObject) => {
      return {x: tileObject.x * step, y: tileObject.y * step}
    })

    let result = false; // So ugly >.>
    tileLocations.forEach((tileLocation, i) => {
      // From formula: |x-a| + |y-b| <= d/2
      // Where x and y = touch location
      //       a and b = tile location * step
      const withinTile = Math.abs(touchLocation.x - tileLocation.x) + Math.abs(touchLocation.y - tileLocation.y) <= step
      if(withinTile){
        result = i;
        return;
      }
    })
    if(tileObjects.length === 1){
      return result === 0 ? true : false;
    }
    return result;
  }

  /**
   * @param {Array} levelMultiArray eg: [
   *    [{x: 3,y: 5}, {x: 4,y: 6}],
   *    [{x: 5,y: 3}, {x: 4,y: 2}]
   *  ]
   * @return {Array|false} [{x: 3,y: 5}, {x: 5, y: 3}]
   * *returns false if not an array
   */
  _getShallowLevelArray(levelMultiArray){
    if(!Array.isArray(levelMultiArray)){
      return false;
    }
    return levelMultiArray.map((levelArray) => {
      return levelArray[0]
    })
  }
}
