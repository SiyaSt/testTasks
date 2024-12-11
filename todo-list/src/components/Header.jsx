import React from 'react';

function Header() {
    return (
        <header className="header">
            <img src="/images/logo.png" width="138" height="96" alt="" className="header-icon"/>
            <h1 className="header-name">Todo-list</h1>
        </header>
    );
}

export default Header;