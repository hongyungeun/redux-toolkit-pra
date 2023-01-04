import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import counterSlice from "../redux/counter";
import callSlice from "../redux/call";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  counter: counterSlice,
  call: callSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
