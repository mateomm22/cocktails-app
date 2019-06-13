import { combineReducers } from 'redux';

import categoriesReducer from './categories';
import drinksReducer from './drinks';

// Set the state key names
export default combineReducers({
  categoriesReducer,
  drinksReducer,
});
