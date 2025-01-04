import { CustomLink } from "../index";
import "./NavigationComponent.scss";
import { FC } from "react";

interface NavigationComponentProps {
  className: string;
}

export const NavigationComponent: FC<NavigationComponentProps> = ({
  className,
}) => {
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
