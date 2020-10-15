import { IS_FETCHING, IS_AVAILABLE, IS_NOT_AVAILABLE } from "./types";
const initialState = { isFetching: false, data: [], err: "" };

const fetchDataReducer = (state = initialState, action) => {
 
  switch (action.type) {
    case IS_FETCHING:
      return { ...state, isFetching: true };
    case IS_AVAILABLE:
      return { isFetching: false, err: "", data: action.payload };
    case IS_NOT_AVAILABLE:
      return { ...state, err: action.payload };
    default:
      return { ...state, isFetching: false };
  }
};
export default fetchDataReducer;

