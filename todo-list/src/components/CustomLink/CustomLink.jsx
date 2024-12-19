import { Link, useMatch } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  const match = useMatch(to);

  // лучше реализовать через классы по условию (используй classNames)
  let active = match ? "#89515A" : "#374375";
  return (
    <Link
      to={to}
      style={{
        color: active,
      }}
      {...props}
    >
      {children}
    </Link>
  );
}

export default CustomLink;
