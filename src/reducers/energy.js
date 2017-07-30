module.exports = (state = {energy: 30}, action) => {
  switch (action.type) {
    case 'USE_ENERGY':
      return {...state, energy: state.energy - 1};
    default:
      return state;
  }
};
