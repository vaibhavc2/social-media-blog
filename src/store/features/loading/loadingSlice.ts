import { createSlice } from "@reduxjs/toolkit";
import { Loading } from "../../../types";

const initialState: Loading = {
  loading: true
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    toggleLoading: (state) => {
      state.loading = !state.loading;
    }
  }
});

export const { toggleLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
