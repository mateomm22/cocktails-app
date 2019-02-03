import { combineReducers } from "redux";

import drinkTypesReducer from './drinkTypes';

//Set the state key names
export default combineReducers({
  drinkTypes: drinkTypesReducer
});
