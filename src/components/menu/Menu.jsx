import React from 'react';
import { Link } from 'react-router-dom';
import './menu-styles.less';

const Menu = () => (
    <nav>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
    </nav>
);

export default Menu;
