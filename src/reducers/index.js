import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import FoodFormReducer from './FoodFormReducer';
import FoodReducer from './FoodReducer';

export default combineReducers({
  auth: AuthReducer,
  foodForm: FoodFormReducer,
  foods: FoodReducer
});
