import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import userReducer from "@/src/store/user/";

const makeStore = () =>
  configureStore({
    reducer: {
      user: userReducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
