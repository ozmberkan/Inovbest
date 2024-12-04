import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snow: JSON.parse(localStorage.getItem("snow")) || false,
};

export const snowSlice = createSlice({
  name: "snow",
  initialState,
  reducers: {
    setSnow: (state, action) => {
      state.snow = action.payload;
      localStorage.setItem("snow", JSON.stringify(action.payload));
    },
  },
});

export const { setSnow } = snowSlice.actions;

export default snowSlice.reducer;
