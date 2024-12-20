import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdditionalInformation, HomePage, Layout, TodoList } from "./API";

import "./styles/index.css";

export const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="todoList" element={<TodoList />} />
      <Route path="addInf" element={<AdditionalInformation />} />
    </Route>
  </Routes>
);
