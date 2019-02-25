import * as actions from './actionTypes';
import axios from '../../services/order-service';

const setDrinks = (actionVal, payload) => {
  return {
    type: actionVal,
    drinks: payload
  };
};

export const startFetching = () => {
  return {
    type: actions.START_FETCH
  };
};

export const clearState = () => {
  return {
    type: actions.CLEAR_STATE
  };
};

export const filterDrinks = (category, value) => {
  return dispatch => {
    axios
      .get('/filter.php', {
        params: {
          [category]: value
        }
      })
      .then(response => {
        dispatch(startFetching());
        dispatch(setDrinks(actions.FILTER_DRINKS, response.data.drinks));
    });
  };
};
