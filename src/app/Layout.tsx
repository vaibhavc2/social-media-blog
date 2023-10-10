import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Layout = () => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
