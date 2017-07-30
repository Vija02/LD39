module.exports = (state = {bandages: []}, action) => {
  switch (action.type) {
    case 'SET_BANDAGE':
      const newArrayWithoutNewPosition = state.bandages.reduce((acc, cur) => {
        if(cur.location.x === action.state.location.x && cur.location.y === action.state.location.y){
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
