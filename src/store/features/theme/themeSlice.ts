import { createSlice } from "@reduxjs/toolkit";
import { Theme } from "../../../types";

const initialState: Theme = {
  dark: true
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setInitialTheme: (state, action) => {
      // get from localStorage, if not found, then check user prefers media theme, and set it initially; if any error or not able to do it, simply show dark theme (initial state will do that)
      // this should be dispatched from the App component to run first at the load of the application
    },
    toggleTheme: (state, action) => {}
  }
});

export const { setInitialTheme, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
