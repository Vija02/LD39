import React, { Component } from 'react';
import Blocks from './Blocks';

import level from './level.json';

class PlayArea extends Component {
  constructor(props){
    super(props)
    this.state = {
      playerCoord: {current: {x: 7, y: 7}, tail: {x: 8, y: 7}},
      cameraCoord: {x: 3, y: 3}, // top left most box
      currentMap: null // will hold from level json
    }
  }
  componentWillMount(){
    this.setState({currentMap: level});
  }
  onKeyDown(e){
    const { x, y } = this.state.playerCoord.current;
    const { cameraCoord } = this.state;
    const playerCoordFromCamera = {x: x - cameraCoord.x, y: y - cameraCoord.y};

    let transformationFunction;
    switch(e.keyCode){
      case 37: // Left
      case 65:
        if(x - 1 < 0) break;
        transformationFunction = (x, y) => {
          return {x: x - 1, y: y}
        }
        if(playerCoordFromCamera.x === 3 && cameraCoord.x > 0){
          this._handleMovement(transformationFunction, true)
          break;
        }
        this._handleMovement(transformationFunction, false)
        break;
      case 39: // Right
      case 68:
        if(x + 1 > level[y].length - 1) break;
        transformationFunction = (x, y) => {
          return {x: x + 1, y: y}
        }
        if(playerCoordFromCamera.x === 12 && cameraCoord.x + 15 < level[y].length - 1){
          this._handleMovement(transformationFunction, true)
          break;
        }
        this._handleMovement(transformationFunction, false)
        break;
      case 38: // Up
      case 87:
        if(y - 1 < 0) break;
        transformationFunction = (x, y) => {
          return {x: x, y: y - 1}
        }
        if(playerCoordFromCamera.y === 2 && cameraCoord.y > 0){
          this._handleMovement(transformationFunction, true)
          break;
        }
        this._handleMovement(transformationFunction, false)
        break;
      case 40: // Down
      case 83:
        if(y + 1 > level.length - 1) break;
        transformationFunction = (x, y) => {
          return {x: x, y: y + 1}
        }
        if(playerCoordFromCamera.y === 6 && cameraCoord.y + 8 < level.length - 1){
          this._handleMovement(transformationFunction, true)
          break;
        }
        this._handleMovement(transformationFunction, false)
        break;
      default:
    }
  }
  _handleMovement(transformationFunction, moveCamera = false){
    const { x, y } = this.state.playerCoord.current;

    let camera = {...this.state.cameraCoord};
    if(moveCamera){
      camera = transformationFunction(this.state.cameraCoord.x, this.state.cameraCoord.y)
    }
    this.setState({
      playerCoord: {current: transformationFunction(x, y), tail: {x, y}},
      cameraCoord: camera
    })
  }
  render() {
    const { cameraCoord, currentMap, playerCoord } = this.state;

    const emptyMap = Array(9).fill(Array(16).fill(null))
    const levelArea = emptyMap.map((xArray, i) => {
      return xArray.map((val, j) => { // val is on {j, i} => {x, y} | val is null
        const x = j;
        const y = i;
        const coordToTakeFromMap = {x: x + cameraCoord.x, y: y + cameraCoord.y}
        if(!Number.isInteger(currentMap[coordToTakeFromMap.y][coordToTakeFromMap.x])) return null;
        const element = React.cloneElement(Blocks[currentMap[coordToTakeFromMap.y][coordToTakeFromMap.x]],
          {style:
            {
              gridRow: `${y + 1}/${y + 2}`,
              gridColumn: `${x + 1}/${x + 2}`,
              width: "100%"
            }
          }
        )
        return element;
      })
    })

    const playerCoordOnMap = {x: playerCoord.current.x - cameraCoord.x, y: playerCoord.current.y - cameraCoord.y}
    const player =
    <div id="player"
      style={{
        backgroundColor: "yellow",
        gridRow: `${playerCoordOnMap.y + 1}/${playerCoordOnMap.y + 2}`,
        gridColumn: `${playerCoordOnMap.x + 1}/${playerCoordOnMap.x + 2}`
      }}
    />

    const tailCoordOnMap = {x: playerCoord.tail.x - cameraCoord.x, y: playerCoord.tail.y - cameraCoord.y}
    const tail =
    <div id="player"
      style={{
        backgroundColor: "blue",
        gridRow: `${tailCoordOnMap.y + 1}/${tailCoordOnMap.y + 2}`,
        gridColumn: `${tailCoordOnMap.x + 1}/${tailCoordOnMap.x + 2}`
      }}
    />

    return (
      <div style={{display: "grid", gridTemplateRows: "repeat(9, 6.25vw)", gridTemplateColumns: "repeat(16, 6.25vw)"}}>
        <div id="ControllerManager" style={{gridRow: "1/10", gridColumn: "1/17", zIndex: "100"}} tabIndex="0" onKeyDown={this.onKeyDown.bind(this)}/>
        {levelArea}
        {player}
        {tail}
        {JSON.stringify(this.state)}
      </div>
    );
  }
}

export default PlayArea;
