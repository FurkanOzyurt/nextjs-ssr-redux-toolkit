import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  authToken: null,
  user: {},
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return { ...state, ...action.payload.user };
    });
  },
});

export const { setUserData, setAuthToken } = userSlice.actions;

export default userSlice.reducer;
