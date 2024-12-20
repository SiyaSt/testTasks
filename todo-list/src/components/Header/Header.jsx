import { CustomLink, Logo } from "../../API";
import "./Header.css";

export const Header = () => (
  <header className="header">
    <Logo />
    <h1 className="header-name">Todo-list</h1>
    <div className="header-navigation">
      <CustomLink className="link" to="/">
        Home
      </CustomLink>
      <CustomLink className="link" to="/todoList">
        Todo-List
      </CustomLink>
      <CustomLink className="link" to="/addInf">
        Additional Information
      </CustomLink>
    </div>
  </header>
);
