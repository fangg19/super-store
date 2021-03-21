import React from 'react';
import classes from './MobileMenu.module.css';
import { NavLink } from 'react-router-dom';

const MobileMenu = (props) => {
  return (
    <div>
      <ul className={classes.MobileMenu} onClick={props.clicked}>
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

        <li>
          <NavLink to="/signin" activeClassName={classes.selected}>
            Sign In
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
