import { combineReducers } from 'redux';

import bandage from './bandage'
import name from './name'

const rootReducer = combineReducers({
  bandage,
  name,
});

export default rootReducer;
