import React from 'react';
import { Link, IndexLink } from 'react-router';

const Menu = () => {
  return (
    <nav className="nav navbar-nav">
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
    </nav>
  );
};

export default Menu;
