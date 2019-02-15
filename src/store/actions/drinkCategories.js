import * as actions from './actionTypes';
import axios from '../../axios-orders';

const setFetchedTypes = (actionVal, payload) => {
  return {
    type: actionVal,
    drinks: payload
  };
};

export const fetchDrinkTypes = () => {
  return dispatch => {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then(response => {
        dispatch(setFetchedTypes(actions.GET_DRINK_TYPES, response.data.drinks));
      })
      .catch(error => {
        dispatch(console.log(error));
      });
  };
};

export const fetchAlcLevel = () => {
  return dispatch => {
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list')
      .then(response => {
        dispatch(setFetchedTypes(actions.GET_ALC_LEVEL, response.data.drinks));
      })
      .catch(error => {
        dispatch(console.log(error));
      });
  };
};