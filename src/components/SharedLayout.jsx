import { Outlet } from "react-router-dom";
import Headers from "./Header/Header";

function SharedLayout() {
  return (
    <>
      <Headers />
      <Outlet />
    </>
  );
}

export default SharedLayout;
