import React from "react";
import { Routes, Route } from "react-router-dom";
// для pages и components можно использовать public api (файл index.js)
import HomePage from "./pages/HomePage/HomePage";
import TodoList from "./pages/TodoList/TodoList";
import AdditionalInformation from "./pages/AdditionalInformation/AdditionalInformation";
import Layout from "./components/Layout/Layout";

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
