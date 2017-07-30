import { combineReducers } from 'redux';

import bandage from './bandage'
import name from './name'
import energy from './energy'

const rootReducer = combineReducers({
  bandage,
  name,
  energy,
});

export default rootReducer;
