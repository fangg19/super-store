import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import Button from './Button';
import MobileMenu from './MobileMenu';
import Backdrop from './Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const openMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <>
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

        <FontAwesomeIcon
          className={classes.menuIcon}
          icon={faBars}
          onClick={openMenu}
        />
      </div>
      {mobileMenu ? (
        <>
          <MobileMenu className={classes.MobileMenu} clicked={openMenu} />
          {/* <Backdrop /> */}
        </>
      ) : null}
    </>
  );
};

export default Navbar;
