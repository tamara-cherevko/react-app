import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu-styles.less';

const Menu = () => (
    <nav>
        <NavLink to="/">home</NavLink>
        <NavLink to="/about">about</NavLink>
    </nav>
);

export default Menu;
