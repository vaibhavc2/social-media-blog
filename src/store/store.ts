import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import authReducer from "./features/auth/authSlice";
import postReducer from "./features/posts/postSlice";
import themeReducer from "./features/theme/themeSlice";
import loadingReducer from "./features/loading/loadingSlice";

const store = configureStore({
  reducer: { authReducer, postReducer, themeReducer, loadingReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { store };
