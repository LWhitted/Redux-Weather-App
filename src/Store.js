import cityReducer from "./State/City/index";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    city: cityReducer
})
const store =  configureStore({
  reducer: rootReducer
})

export default store;
