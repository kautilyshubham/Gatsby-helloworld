import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
    return (
        <div>
            <Link className="nav_link" to="/">Home</Link>
            <Link className="nav_link" to="/about">About</Link>
            <Link className="nav_link" to="/blog">Blog</Link>
            <Link className="nav_link" to="/contact">Contact</Link>
        </div>
    )
}

export default Header;