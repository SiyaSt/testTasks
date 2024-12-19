import { Link } from "react-router-dom";

import "./HomePage.css";

function HomePage() {
  return (
    <main className="main">
      <h3>This is homepage!</h3>
      <p>
        This app is used to make your own todo-list -
        <Link className="link" to="/TodoList/TodoList">
          Click to start
        </Link>
      </p>
    </main>
  );
}

export default HomePage;
