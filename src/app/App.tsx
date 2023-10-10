import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { useAuth } from "../hooks";

const App = () => {
  useAuth();
  return <RouterProvider router={router} />;
};

export default App;
