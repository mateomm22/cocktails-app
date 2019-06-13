import * as actions from '../actions/actionTypes';

const initialState = {
  drinkTypes: [],
  alcohol: [],
};

const setCat = (state, action, cat, stateName) => {
  const results = action.drinks.map((type, key) => {
    const id = key;
    const name = type[cat];
    const typeInfo = {
      id,
      name,
    };
    return typeInfo;
  });
  return {
    ...state,
    [stateName]: [
      ...results,
    ],
  };
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_DRINK_TYPES:
      return setCat(state, action, 'strCategory', 'drinkTypes');

    case actions.GET_ALC_LEVEL:
      return setCat(state, action, 'strAlcoholic', 'alcohol');

    default:
      return state;
  }
};

export default categoriesReducer;
