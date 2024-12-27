import { useRef, useEffect } from "react";
import { classNames } from "../../utils/ClassName";
import { NavigationComponent } from "../../components";
import { useDropdownContext } from "../../context";
import "./DropdownMenu.scss";

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
