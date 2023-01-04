import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    plus: (state, action) => {
      // state.value + 1;
      console.log("state", state);
      console.log("action", action);
      state.value += action.payload;
    },
    minus: (state, action) => {
      state.value -= 1;
    },
  },
});

export const { plus, minus } = counterSlice.actions;
export default counterSlice.reducer;
