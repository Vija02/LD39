import { combineReducers } from 'redux';

import bandage from './bandage'
import name from './name'
import energy from './energy'
import event from './event'
import movement from './movement'

const rootReducer = combineReducers({
  bandage,
  name,
  energy,
  event,
  movement,
});

export default rootReducer;
