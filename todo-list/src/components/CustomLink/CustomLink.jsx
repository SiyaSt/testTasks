import { Link, useMatch } from "react-router-dom";
import { classNames } from "../../utils/ClassName";

export const CustomLink = ({ children, to, className, ...props }) => {
  const match = useMatch(to);
  let names = classNames(className, { "active-link": match });

  return (
    <Link to={to} className={names} {...props}>
      {children}
    </Link>
  );
};
