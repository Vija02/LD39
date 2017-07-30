import { combineReducers } from 'redux';

import bandage from './bandage'
import name from './name'
import energy from './energy'
import event from './event'

const rootReducer = combineReducers({
  bandage,
  name,
  energy,
  event,
});

export default rootReducer;
