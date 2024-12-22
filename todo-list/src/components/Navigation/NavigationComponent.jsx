import { CustomLink } from "../../API";
import "./NavigationComponent.scss";

export const NavigationComponent = ({ className }) => {
  return (
    <div className={className}>
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
  );
};
