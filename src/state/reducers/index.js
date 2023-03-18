import { combineReducers } from "redux";
import { CardReducer, loginReducer } from "./loginReducer";

export default combineReducers({
  login: loginReducer,
  card:CardReducer
});
