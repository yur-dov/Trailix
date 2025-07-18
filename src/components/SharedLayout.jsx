import { Outlet } from "react-router-dom";
import Headers from "./Header/Header";
import Footer from "./Footer/Footer";

function SharedLayout() {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
}

export default SharedLayout;
