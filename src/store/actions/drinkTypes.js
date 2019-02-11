import * as actions from "./actionTypes";
import axios from '../../axios-orders';

const setFetchedTypes = drinkTypes => {
  return {
    type: actions.GET_DRINK_TYPES,
    drinks: drinkTypes
  };
};

export const fetchDrinkTypes = () => {
  return dispatch => {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then(response => {
        dispatch(setFetchedTypes(response.data.drinks));
      })
      .catch(error => {
        dispatch(console.log(error));
      });
  };
};
