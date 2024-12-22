import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  AdditionalInformation,
  DropdownContext,
  HomePage,
  Layout,
  TodoList,
} from "./API";

import "./styles/index.scss";

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contextValue = {
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
