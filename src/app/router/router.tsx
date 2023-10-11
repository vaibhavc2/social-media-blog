import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import Layout from "../Layout";
import { Home, Login, PageNotFound, Signup } from "../pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);
