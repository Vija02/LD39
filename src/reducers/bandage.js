module.export = (state = {bandages: []}, action) => {
  switch (action.type) {
    case 'SET_BANDAGE':
      const newArrayWithoutNewPosition = state.bandages.reduce((acc, cur) => {
        if(cur.position.x === action.position.x && cur.position.y === action.position.y){
          return acc
        }
        const lastArr = [...acc];
        lastArr.push(cur);
        return lastArr
      }, [])
      return {...state, bandages: [...newArrayWithoutNewPosition, action.state]};
    default:
      return state;
  }
};
