import { combineReducers } from 'redux';

import drinkTypesReducer from './drinkTypes';
import alcoholReducer from './alcohol';
import drinksReducer from './drinks';

//Set the state key names
export default combineReducers({
  drinkTypes: drinkTypesReducer,
  alcohol: alcoholReducer,
  drinksReducer: drinksReducer
});
