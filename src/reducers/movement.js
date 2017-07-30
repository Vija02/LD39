module.exports = (state = {step: 1}, action) => {
  switch (action.type) {
    case 'ADD_MOVEMENT':
      return {...state, step: state.step + 1};
    case 'ROTATE_MOVEMENT':
      if(state.step + 1 > action.b){
        return {...state, step: action.a};
      }
      return {...state, step: state.step + 1};
    default:
      return state;
  }
};
