import { useRef, useEffect, FC } from "react";
import { classNames } from "../../utils/ClassName";
import { NavigationComponent } from "../index";
import { useDropdownContext } from "../../context";
import "./DropdownMenu.scss";
import { DropdownContextType } from "../../types/types";

export const DropdownMenu: FC = () => {
  const { isOpen, setIsOpen }: DropdownContextType = useDropdownContext();
  const menuRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <div className="dropdown-container">
      <button onClick={toggleMenu} className="dropdown-button" ref={menuRef}>
        ☰
      </button>
      <NavigationComponent
        className={classNames("dropdown-menu", { show: isOpen })}
      />
    </div>
  );
};
