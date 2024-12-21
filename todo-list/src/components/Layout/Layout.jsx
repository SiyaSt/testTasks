import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../API";

export const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
