import * as actions from '../actions/actionTypes';

const initialState = {
  loading: false,
  drinks: [],
};

const setDrinks = (state, action) => {
  const results = action.drinks.map((drink) => {
    const id = drink.idDrink;
    const name = drink.strDrink;
    const image = drink.strDrinkThumb;
    const drinkInfo = {
      id,
      name,
      image,
    };
    return drinkInfo;
  });

<<<<<<< HEAD
  return {
    ...state,
    loading: false,
    drinks: results,
  };
=======
const fetchDrinks = (state, action) => {
  
  let results = [];
  action.drinks.map(drink => {
    let id = drink.idDrink;
    let name = drink.strDrink;
    let image = drink.strDrinkThumb;
    let cat = drink.strCategory;
    let alc = drink.strAlcoholic;
    let drinkInfo = {
      id: id,
      name: name,
      image: image,
      alcohol: alc,
      category: cat
    };
    return results.push(drinkInfo);
  });
  
  return state = [
    ...results
  ]
>>>>>>> Build the object inside the reducer
};

const fetchStart = state => ({
  ...state,
  loading: true,
});

const clearDrinks = state => ({
  ...state,
  drinks: [],
});

const drinksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FILTER_DRINKS:
      return setDrinks(state, action);

    case actions.START_FETCH:
      return fetchStart(state, action);

    case actions.CLEAR_STATE:
      return clearDrinks(state, action);

    case actions.SEARCH_BY_NAME:
      return setDrinks(state, action);

    default:
      return state;
  }
};

export default drinksReducer;
