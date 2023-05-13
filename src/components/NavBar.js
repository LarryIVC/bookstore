import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const NavBar = () => (
  <div className="pageContainer">
    <div className="header">
      <h1 className="logo">Bookstore CMS</h1>
      <nav>
        <Link className="menuItem" to="/">Books</Link>
        <Link className="menuItem" to="/categories">Categories</Link>
      </nav>
    </div>
    <div>
      <span>
        <FaUserAlt />
      </span>
    </div>
    <Outlet />
  </div>
);

export default NavBar;
