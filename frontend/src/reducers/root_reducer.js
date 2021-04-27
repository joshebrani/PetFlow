import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from './errors_reducer';
import expenses from './expenses_reducer'
import uiReducer from './ui_reducer'


const RootReducer = combineReducers({
  session,
  errors,
  expenses,
  ui: uiReducer
  
});

export default RootReducer;
