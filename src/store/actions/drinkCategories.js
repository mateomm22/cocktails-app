import * as actions from './actionTypes';
import axios from '../../services/order-service';

const setFetchedTypes = (actionVal, payload) => ({
  type: actionVal,
  drinks: payload,
});

export const fetchDrinkTypes = () => (dispatch) => {
  axios
    .get('list.php?c=list')
    .then((response) => {
      dispatch(setFetchedTypes(actions.GET_DRINK_TYPES, response.data.drinks));
    });
};

export const fetchAlcLevel = () => (dispatch) => {
  axios
    .get('list.php?a=list')
    .then((response) => {
      dispatch(setFetchedTypes(actions.GET_ALC_LEVEL, response.data.drinks));
    });
};
