import * as actions from './actionTypes';
import axios from '../../services/order-service';

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

export const fetchDrinksByName = keyword => (dispatch) => {
  axios
    .get('https://www.thecocktaildb.com/api/json/v1/1/search.php', {
      params: {
        s: keyword,
      },
    })
    .then((response) => {
      dispatch(startFetching());
      dispatch(setDrinks(actions.SEARCH_BY_NAME, response.data.drinks));
    });
};
