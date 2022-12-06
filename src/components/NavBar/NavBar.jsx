import React from "react";
import '../../Base.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="HeaderLinks">
            <Link to="/">BLOG</Link>
            <Link to="/about">ABOUT</Link>
        </div>
    );
};

export default NavBar;
