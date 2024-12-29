import { FC } from "react";
import { ReactComponent as LogoSvg } from "./logo.svg";
import "./Logo.scss";

export const Logo: FC = () => {
  return <LogoSvg className="header-icon" />;
};
