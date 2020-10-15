import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import fetchDataReducer from "./fetchDataReducer";

let allReducer = combineReducers({
  data: fetchDataReducer,
});

const store = createStore(
  allReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
