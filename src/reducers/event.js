module.exports = (state = {}, action) => {
  switch (action.type) {
    case 'SET_EVENT':
      const lastState = {...state};
      lastState[action.eventName] = true;
      return lastState;
    default:
      return state;
  }
};
