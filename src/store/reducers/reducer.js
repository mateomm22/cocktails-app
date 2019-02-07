import { combineReducers } from 'redux';

import drinkTypesReducer from './drinkTypes';
import alcoholReducer from './alcohol';

//Set the state key names
export default combineReducers({
  drinkTypes: drinkTypesReducer,
  alcohol: alcoholReducer
});
