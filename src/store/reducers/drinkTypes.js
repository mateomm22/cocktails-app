import * as actions from "../actions/actionTypes";

const setTypes = (state, action) => {
  
  let results = [];
  action.drinks.map((type, key) => {
    let id = key;
    let name = type.strCategory;
    let typeInfo = {
      id: id,
      name: name
    };
    return results.push(typeInfo);
  });
  
  return state = [
    ...results
  ]
};

const drinkTypesReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GET_DRINK_TYPES:
      return setTypes(state, action);
  
    default:
      return state
  }
};

export default drinkTypesReducer;
