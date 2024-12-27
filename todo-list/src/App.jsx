import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AdditionalInformation, HomePage, TodoList } from "./pages";
import { DropdownContext } from "./context";
import { Layout } from "./components";
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
