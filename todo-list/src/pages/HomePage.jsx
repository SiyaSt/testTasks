// начиная с 17 версии можно не импортировать React
import React from 'react';
import {Link} from "react-router-dom";

function HomePage() {
    return (
        <main className="main">
            <h3>
                This is homepage!
            </h3>
            {/* так как у нас jsx то '>' воспринимается как код  */}
            <p>This app is used to make your own todo-list -> <Link className="link" to="/todoList">Click to start</Link></p>

        </main>
    );
}

export default HomePage;