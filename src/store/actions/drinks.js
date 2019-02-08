import * as actions from './actionTypes';
import axios from '../../services/order-service';

<<<<<<< HEAD
const setDrinks = (actionVal, payload) => ({
  type: actionVal,
  drinks: payload,
});

export const startFetching = () => ({
  type: actions.START_FETCH,
});

export const clearState = () => ({
  type: actions.CLEAR_STATE,
});

export const filterDrinks = (category, value) => (dispatch) => {
  axios
    .get('/filter.php', {
      params: {
        [category]: value,
      },
    })
    .then((response) => {
      dispatch(startFetching());
      dispatch(setDrinks(actions.FILTER_DRINKS, response.data.drinks));
    });
};

export const setFetchedDrinks = (drinksByName) => {
  const results = [];
  drinksByName.map((drink) => {
    const drinkInfo = {};
    const drinkId = drink.idDrink;
    const drinkName = drink.strDrink;
    drinkInfo.id = drinkId;
    drinkInfo.name = drinkName;
    return results.push(drinkInfo);
  });
  return {
    type: actions.SEARCH_BY_NAME,
    payload: results,
=======
const setFetchedDrinks = drinksByName => {
  return {
    type: actions.SEARCH_BY_NAME,
    drinks: drinksByName
>>>>>>> Build the object inside the reducer
  };
};

export const fetchDrinksByName = keyword => (
  (dispatch) => {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/search.php', {
        params: {
          s: keyword,
        },
      })
      .then((response) => {
        dispatch(setFetchedDrinks(response.data.drinks));
      })
      .catch((error) => {
        dispatch(console.log(error));
      });
  }
);
