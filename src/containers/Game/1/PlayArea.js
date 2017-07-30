import React, { Component } from 'react';
import Blocks from './Blocks';

import { useEnergy } from 'actions/energy'

import level from './level.json';

import person from 'assets/person.png';

// Gosh, what a long file. I think i don't want to refactor this.... At least it's not spaghetti code -w-
class PlayArea extends Component {
  constructor(props){
    super(props)
    this.state = {
      playerCoord: {current: {x: 2, y: 11}, tail: {x: 2, y: 12}, facing: {x: 0, y: -1}},
      cameraCoord: {x: 0, y: 8}, // top left most box
      currentMap: null, // will hold from level json
    }
    this.mapRefsCameraSpace = Array(9).fill(Array(16).fill(null));
  }
  componentWillMount(){
    this.props.history.listen((location, action) => {
      if(location.pathname.includes('/done')){
        this.controllerDiv.focus()
      }
    })
    this.setState({currentMap: level});
  }
  componentDidMount(){
    this.controllerDiv.focus()
  }
  onKeyDown(e){
    const { x, y } = this.state.playerCoord.current;
    const { cameraCoord, playerCoord } = this.state;
    const playerCoordFromCamera = {x: x - cameraCoord.x, y: y - cameraCoord.y};

    let movementTransform;
    // On move => check barrier => move player & camera
    switch(e.keyCode){
      case 13: // enter
      case 32: // space
      case 90: // z
        const interactObjectLocation = {x: x - this.state.cameraCoord.x + playerCoord.facing.x, y: y - this.state.cameraCoord.y + playerCoord.facing.y}
        const interactRef = this.mapRefsCameraSpace[interactObjectLocation.y][interactObjectLocation.x]
        if(interactRef.interactable){
          interactRef.interact(this.props.history, x + playerCoord.facing.x, y + playerCoord.facing.y);
        }
        break;
      case 37: // Left
      case 65:
        movementTransform = {x: -1, y: 0}
        if(x - 1 < 0){
          this.setState({playerCoord: {...this.state.playerCoord, facing: movementTransform}});
          break;
        }
        if(playerCoordFromCamera.x === 3 && cameraCoord.x > 0){
          this._handleMovement(movementTransform, true)
          break;
        }
        this._handleMovement(movementTransform, false)
        break;
      case 39: // Right
      case 68:
        movementTransform = {x: 1, y: 0}
        if(x + 1 > level[y].length - 1){
          this.setState({playerCoord: {...this.state.playerCoord, facing: movementTransform}});
          break;
        }
        if(playerCoordFromCamera.x === 12 && cameraCoord.x + 15 < level[y].length - 1){
          this._handleMovement(movementTransform, true)
          break;
        }
        this._handleMovement(movementTransform, false)
        break;
      case 38: // Up
      case 87:
        movementTransform = {x: 0, y: -1}
        if(y - 1 < 0){
          this.setState({playerCoord: {...this.state.playerCoord, facing: movementTransform}});
          break;
        }
        if(playerCoordFromCamera.y === 2 && cameraCoord.y > 0){
          this._handleMovement(movementTransform, true)
          break;
        }
        this._handleMovement(movementTransform, false)
        break;
      case 40: // Down
      case 83:
        movementTransform = {x: 0, y: 1}
        if(y + 1 > level.length - 1){
          this.setState({playerCoord: {...this.state.playerCoord, facing: movementTransform}});
          break;
        }
        if(playerCoordFromCamera.y === 6 && cameraCoord.y + 8 < level.length - 1){
          this._handleMovement(movementTransform, true)
          break;
        }
        this._handleMovement(movementTransform, false)
        break;
      default:
    }
  }
  _handleMovement(movementTransform, moveCamera = false){
    const { x, y } = this.state.playerCoord.current;
    const playerNextLocation = {x: x + movementTransform.x, y: y + movementTransform.y};

    if(this.mapRefsCameraSpace[playerNextLocation.y - this.state.cameraCoord.y][playerNextLocation.x - this.state.cameraCoord.x].isSolid()){
      this.setState({
        playerCoord: {...this.state.playerCoord, facing: movementTransform}
      })
      return;
    }

    useEnergy()

    let camera = {...this.state.cameraCoord};
    if(moveCamera){
      camera = {x: this.state.cameraCoord.x + movementTransform.x, y: this.state.cameraCoord.y + movementTransform.y};
    }
    this.setState({
      playerCoord: {current: playerNextLocation, tail: {x, y}, facing: movementTransform},
      cameraCoord: camera
    })
  }
  saveRef(ref, x, y){
    // I HATE JAVASCRIPT... Wasted me idk how long on this freakin bug :/ Mutations man....
    const newArray = [...this.mapRefsCameraSpace[y]]
    newArray[x] = ref;
    // handle redux
    if(ref !== null && ref.getWrappedInstance !== null && ref.getWrappedInstance !== undefined){
      newArray[x] = ref.getWrappedInstance();
    }
    this.mapRefsCameraSpace[y] = newArray
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
          {
            ref: (ref) => {
              this.saveRef(ref, x, y)
            },
            where: {onMap: coordToTakeFromMap},
            style:
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
    const rotation = Math.atan2(playerCoord.facing.x, -1 * playerCoord.facing.y)* (180 / Math.PI)
    const player =
    <img id="player" alt=""
      src={person}
      style={{
        width: "100%",
        transform: `rotate(${rotation}deg)`,
        transformOrigin: "center 25%",
        // backgroundColor: "yellow",
        gridRow: `${playerCoordOnMap.y + 1}/${playerCoordOnMap.y + 2}`,
        gridColumn: `${playerCoordOnMap.x + 1}/${playerCoordOnMap.x + 2}`
      }}
    />

    const tailCoordOnMap = {x: playerCoord.tail.x - cameraCoord.x, y: playerCoord.tail.y - cameraCoord.y}
    const tail =
    <div id="player"
      style={{
        // backgroundColor: "blue",
        gridRow: `${tailCoordOnMap.y + 1}/${tailCoordOnMap.y + 2}`,
        gridColumn: `${tailCoordOnMap.x + 1}/${tailCoordOnMap.x + 2}`
      }}
    />

    return (
      <div style={{display: "grid", gridTemplateRows: "repeat(9, 6.25vw)", gridTemplateColumns: "repeat(16, 6.25vw)"}}>
        <div id="ControllerManager" style={{gridRow: "1/10", gridColumn: "1/17", zIndex: "100"}} tabIndex="0" onKeyDown={this.onKeyDown.bind(this)} ref={(ref) => {this.controllerDiv = ref}} />
        {levelArea}
        {player}
        {tail}
        {JSON.stringify(this.state)}
      </div>
    );
  }
}

export default PlayArea;
