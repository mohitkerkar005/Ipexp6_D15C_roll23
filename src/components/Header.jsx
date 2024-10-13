
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/faculty">Faculty</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
