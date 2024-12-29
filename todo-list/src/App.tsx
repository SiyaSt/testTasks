import { Dispatch, FC, SetStateAction, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AdditionalInformation, HomePage, TodoList } from "./pages";
import { DropdownContext } from "./context";
import { Layout } from "./components";
import "./styles/index.scss";

interface AppContextValue {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const App: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const contextValue: AppContextValue = {
    isOpen,
    setIsOpen,
  };

  return (
    <DropdownContext.Provider value={contextValue}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="todoList" element={<TodoList />} />
          <Route path="addInf" element={<AdditionalInformation />} />
        </Route>
      </Routes>
    </DropdownContext.Provider>
  );
};
