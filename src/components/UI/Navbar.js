import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [sideMenu, setSideMenu] = useState(false);

  const openMenu = () => {
    setSideMenu(!sideMenu);
  };
  return (
    <div className={classes.navbar}>
      <h1>Super Store</h1>
      {sideMenu ? (
        <div>
          <ul className={classes.sideMenu}>
            <li>
              <NavLink to="/" exact activeClassName={classes.selected}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" activeClassName={classes.selected}>
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink to="/deals" activeClassName={classes.selected}>
                Deals
              </NavLink>
            </li>
          </ul>
        </div>
      ) : null}
      <ul className={classes.navlinks}>
        <li>
          <NavLink to="/" exact activeClassName={classes.selected}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" activeClassName={classes.selected}>
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink to="/deals" activeClassName={classes.selected}>
            Deals
          </NavLink>
        </li>
      </ul>
      <Button>Sign In</Button>
      <FontAwesomeIcon
        className={classes.userIcon}
        icon={faBars}
        onClick={openMenu}
      />
    </div>
  );
};

export default Navbar;
