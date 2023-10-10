import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../../types";

const initialState: Post = {} as Post;

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {}
});

export const {} = postSlice.actions;

export default postSlice.reducer;
