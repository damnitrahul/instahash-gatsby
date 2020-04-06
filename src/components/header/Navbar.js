import React from 'react';
import './Navbar.scss';
import { Link } from 'gatsby';

import logo from '../../icons/instahash.png';
function Navbar() {
  return (
    <nav>
      <div className="container">
        <img src={logo} alt="" />
        <p>
          <Link exact to="/" activeClassName="active">
            Hashtag Generator
          </Link>
          <Link exact to="/downloader" activeClassName="active">
            DP Downloader
          </Link>
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
