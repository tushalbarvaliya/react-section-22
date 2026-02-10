import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationBar.module.css";
const NavigationBar = () => {
  return (
    <>
      <header className={classes.header}>
        <nav className={classes.list}>
          <ul>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Products
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavigationBar;
