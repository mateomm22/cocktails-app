import * as actions from '../actions/actionTypes';

const setLevels = (state, action) => {
  
  let results = [];
  action.drinks.map((type, key) => {
    let id = key;
    let name = type.strAlcoholic;
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

const alcoholReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GET_ALC_LEVEL:
      return setLevels(state, action);
  
    default:
      return state
  }
};

export default alcoholReducer;
