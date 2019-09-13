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
    .get('filter.php', {
      params: {
        [category]: value,
      },
    })
    .then((response) => {
      dispatch(startFetching());
      dispatch(setDrinks(actions.FILTER_DRINKS, response.data.drinks));
    });
};

export const getDrinkDetails = idDrink => (dispatch) => {
  axios
    .get('lookup.php', {
      params: {
        'i': idDrink,
      },
    })
    .then((response) => {
      console.log(response);
      dispatch(startFetching());
      dispatch(setDrinks(actions.GET_DETAILS, response.data.drinks));
    });
}
