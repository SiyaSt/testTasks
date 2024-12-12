import {Link, useMatch} from "react-router-dom";
import React from 'react';

function CustomLink({children, to, ...props}) {
    const match = useMatch(to);
    let active = match? '#89515A' : '#374375'
    return (
        <Link
            to={to}
            style={{
                color: active
            }}
            {...props}
              >
            {children}
        </Link>

    );
}

export default CustomLink;