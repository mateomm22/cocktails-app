import * as endpoint from '../../constants/endpoints';
import axios from '../../services/order-service';

const setFetchedTypes = (actionVal, payload) => ({
  type: actionVal,
  drinks: payload,
});

/**
 * Get all the items inside a given category
 * @param {string} param - kay of the param inside the API.
 * @param {number} action -Name of the action for the reducer.
 * @returns {function} Axios request to the API with 
 * the set parameters.
 */
export const fetchCategory = (param, action) => (dispatch) => {
  axios
    .get(endpoint.LIST, {
      params: {
        [param]: 'list',
      },
    })
    .then((response) => {
      dispatch(setFetchedTypes(action, response.data.drinks));
    });
};
