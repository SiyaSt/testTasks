import { DropdownMenu, Logo, NavigationComponent } from "../../API";
import "./Header.scss";

export const Header = () => (
  <header className="header">
    <Logo />
    <h1 className="header-name">Todo-list</h1>
    <NavigationComponent className="header-navigation" />
    <DropdownMenu></DropdownMenu>
  </header>
);
