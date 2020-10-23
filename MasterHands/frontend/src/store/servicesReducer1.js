import {
 FETCH_SERVICE, FETCH_SERVICES,
  FETCH_СATEGORIES, FETCH_SUPERCATEGORIES
} from './types'

/* const initialState = {};
Object.freeze(initialState); */

let initialState = [] ;

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUPERCATEGORIES:
      return Object.assign({}, state, { supercategories: action.supercategories });
    case FETCH_СATEGORIES:
      return Object.assign({}, state, { categories: action.categories });
    case FETCH_SERVICES:
      return Object.assign({}, state, { services: action.services }); 
    case FETCH_SERVICE:
      return  action.service; 
    default:
      return state
  }
}

export default servicesReducer;