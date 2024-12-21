import { useState, useRef, useEffect } from "react";
import { NavigationComponent } from "../../API";
import "./Dropdownmenu.css";
import { classNames } from "../../utils/ClassName";

export const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
