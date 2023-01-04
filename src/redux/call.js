import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const apiCall = createAsyncThunk("apiCall", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const res2 = await res.json();
  return res2;
});
export const apiCall2 = createAsyncThunk("apiCall", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const res2 = await res.json();
  return res2;
});

export const callSlice = createSlice({
  name: "call",
  initialState,
  reducer: {},
  extraReducers: {
    [apiCall.pending]: (state, action) => {
      console.log("pendingState", state);
      console.log("pendingAction", action);
    },
    [apiCall.fulfilled]: (state, action) => {
      state.list = action.payload;
      console.log(apiCall);
      console.log("fulfilledState", state);
      console.log("fulfilledActions", action);
    },
    [apiCall.rejected]: (state, action) => {
      console.log("rejected");
    },
  },
  extraReducers: {
    [apiCall2.pending]: (state, action) => {
      console.log("pendingState", state);
      console.log("pendingAction", action);
    },
    [apiCall2.fulfilled]: (state, action) => {
      state.list = action.payload;
      console.log(apiCall);
      console.log("fulfilledState", state);
      console.log("fulfilledActions", action);
    },
    [apiCall2.rejected]: (state, action) => {
      console.log("rejected");
    },
  },
});

export default callSlice.reducer;
