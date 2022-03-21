import React from 'react';
import { Outlet } from "react-router-dom";
import CustomLink from './CustomLink';

const Layout = () => {
    const setActive =({isActive})=> isActive ? 'active-link' : '';

    return (
        <>
        <header>
         <CustomLink to="/" className={setActive}>Home</CustomLink>
         <CustomLink to="/posts" className={setActive}>Blog</CustomLink>
         <CustomLink to="/about" className={setActive}>About</CustomLink>
      </header>
      <Outlet/>
      <footer>2022</footer>
      </>
    );
};

export {Layout};