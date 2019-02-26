import * as actions from '../actions/actionTypes';

const initialState = {
  loading: false,
  drinks: []
}

const setDrinks = (state, action) => {
  
  const results = action.drinks.map(drink => {
    let id = drink.idDrink;
    let name = drink.strDrink;
    let image = drink.strDrinkThumb;
    let drinkInfo = {
      id: id,
      name: name,
      image: image
    };
    return drinkInfo;
  });

  return {
    ...state,
    loading: false,
    drinks: results
  } 
};

const fetchStart = (state) => {
  return {
    ...state, 
    loading: true
  }
};

const clearDrinks = (state) => {
  return {
    ...state, 
    drinks: []
  }
};

const drinksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FILTER_DRINKS:
      return setDrinks(state, action);
    
    case actions.START_FETCH:
      return fetchStart(state, action);
    
    case actions.CLEAR_STATE:
      return clearDrinks(state, action);

    default:
      return state
  }
};

export default drinksReducer;
