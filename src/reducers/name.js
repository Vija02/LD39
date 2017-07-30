module.exports = (state = {name: null}, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {...state, name: action.name};
    default:
      return state;
  }
};
