import {
  FOOD_FETCH_SUCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case FOOD_FETCH_SUCESS:
      return action.payload;
    default:
      return state;
  }
};
