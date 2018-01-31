import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

export const reducers = combineReducers({
  routing: routerReducer
});
