import { createContext, useContext } from "react";

export const DropdownContext = createContext(null);

export const useDropdownContext = () => {
  return useContext(DropdownContext);
};
