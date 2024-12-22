import { Link } from "react-router-dom";

import "./HomePage.scss";

export const HomePage = () => (
  <main className="main">
    <h3>This is homepage!</h3>
    <p className="main-text">
      This app is used to make your own todo-list -
      <Link className="link" to="/todoList">
        Click to start
      </Link>
    </p>
  </main>
);
