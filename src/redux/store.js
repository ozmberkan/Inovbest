import { configureStore } from "@reduxjs/toolkit";
import snowReducer from "./snowSlice.js";

export const store = configureStore({
  reducer: {
    snow: snowReducer,
  },
});
