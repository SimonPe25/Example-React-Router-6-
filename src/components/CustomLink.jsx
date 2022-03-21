import React from 'react';
import {Link, useMatch} from 'react-router-dom';

const CustomLink = ({children, to, ...props}) => {
    const math = useMatch({
        path: to,
        end: to.length === 1,
    });
    return (
        <Link 
        to={to}
        style={{
            color: math ? "red" : "green"
        }}
        {...props}>
        {children}
        </Link>
    );
};

export default CustomLink;