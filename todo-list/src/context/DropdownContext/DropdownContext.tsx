import { createContext, useContext } from "react";
import { DropdownContextType } from "../../types/types";

const defaultDropdownContext: DropdownContextType = {
  isOpen: false,
  setIsOpen: () => {},
};
export const DropdownContext = createContext<DropdownContextType>(
  defaultDropdownContext,
);

export const useDropdownContext = (): DropdownContextType => {
  return useContext(DropdownContext);
};
