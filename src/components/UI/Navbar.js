import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import Button from './Button';

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <h1>Super Store</h1>
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
    </div>
  );
};

export default Navbar;
