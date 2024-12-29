import { Outlet } from "react-router-dom";
import { Footer, Header } from "../index";
import { FC } from "react";

export const Layout: FC = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
