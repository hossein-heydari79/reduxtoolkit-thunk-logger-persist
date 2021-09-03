import countReducer from "./count/count.reducer";
import { combineReducers } from "@reduxjs/toolkit";

const reducer = combineReducers({
  count: countReducer,
});

export default reducer;
