import { useRef, useEffect } from "react";
import { classNames } from "../../utils/ClassName";
import { NavigationComponent, useDropdownContext } from "../../API";
import "./Dropdownmenu.css";

export const DropdownMenu = () => {
  const { isOpen, setIsOpen } = useDropdownContext();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <div className="dropdown-container" ref={menuRef}>
      <button onClick={toggleMenu} className="dropdown-button">
        ☰
      </button>
      <NavigationComponent
        className={classNames("dropdown-menu", { show: isOpen })}
      />
    </div>
  );
};
