import { FC } from "react";
import { DropdownMenu, Logo, NavigationComponent } from "../index";
import "./Header.scss";

export const Header: FC = () => (
  <header className="header">
    <div className="header-title">
      <Logo />
      <h1 className="header-name">Todo-list</h1>
    </div>
    <NavigationComponent className="header-navigation" />
    <DropdownMenu></DropdownMenu>
  </header>
);
