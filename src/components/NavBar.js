import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = () => (
  <div className="pageContainer">
    <div className="header">
      <div className="navigator">
        <h1 className="logo">Bookstore CMS</h1>
        <nav className="menu">
          <Link className="menuItem" to="/">Books</Link>
          <Link className="menuItem" to="/categories">Categories</Link>
        </nav>
      </div>
      <div className="circle">
        <span className="login">
          <FaUserAlt />
        </span>
      </div>
    </div>
    <Outlet />
  </div>
);

export default NavBar;
