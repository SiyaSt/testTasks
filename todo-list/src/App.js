// отдельный файл стилей для каждого компонента
// импорт файла со стилями должен быть ниже всех остальных импортов
import "./styles/App.css";
import './styles/index.css';
import "./styles/Navigation.css"
import {Routes, Route} from "react-router-dom"
// для pages и components можно использовать public api (файл index.js)
import HomePage from "./pages/HomePage";
import TodoList from "./pages/TodoList";
import AdditionalInformation from "./pages/AdditionalInformation";
import Layout from "./components/Layout";

// можно переименовать файл в App.jsx

// чаще всего компоненты создают как стрелочные функции (+ сниппеты)
// добавить форматирование, настройку eslint + stylelint
function App() {

    return (
        // лишняя вложенность, ее можно убрать
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="todoList" element={<TodoList/>}/>
                    <Route path="addInf" element={<AdditionalInformation/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
