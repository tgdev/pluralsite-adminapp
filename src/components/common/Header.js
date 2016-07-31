import React, { PropTypes } from 'react';
import { IndexLink } from 'react-router';
import Menu from './Menu';

const Header = () => {
  return (
    <header className="header navbar navbar-inverse">
      <div className="navbar-header">
        <IndexLink to="/" className="navbar-brand" activeClassName="active">
          <img src="http://placehold.it/100x40/" alt="Logo" />
        </IndexLink>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
