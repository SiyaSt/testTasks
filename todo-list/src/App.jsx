import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdditionalInformation, HomePage, Layout, TodoList } from "./API";

import "./styles/index.css";

// чаще всего компоненты создают как стрелочные функции (+ сниппеты)
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="todoList" element={<TodoList />} />
        <Route path="addInf" element={<AdditionalInformation />} />
      </Route>
    </Routes>
  );
}

export default App;
