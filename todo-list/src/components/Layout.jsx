import React from 'react';
import Header from "./Header";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";


function Layout() {
    return (
        // если не нужна вложенность, то можно использовать React fragment <></>
        <div>
            {/* лучше так - <Header/> */}
            <Header></Header>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
}

export default Layout;