import React from 'react';
import CustomLink from "./CustomLink";


function Header() {
    return (
        <header className="header">
            <img src="/images/logo.png" width="138" height="96" alt="" className="header-icon"/>
            <h1 className="header-name">Todo-list</h1>
            <div className="header-navigation">
                <CustomLink className="link" to="/">Home</CustomLink>
                <CustomLink className="link" to="/todoList">Todo-List</CustomLink>
                <CustomLink className="link" to="/addInf">Additional Information</CustomLink>
            </div>
        </header>
    );
}

export default Header;