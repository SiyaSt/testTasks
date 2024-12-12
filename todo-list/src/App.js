import "./styles/App.css";
import './styles/index.css';
import "./styles/Navigation.css"
import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import TodoList from "./pages/TodoList";
import AdditionalInformation from "./pages/AdditionalInformation";
import Layout from "./components/Layout";


function App() {

    return (
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
