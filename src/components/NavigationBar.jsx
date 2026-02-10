import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavigationBar.module.css";
const NavigationBar = () => {
  return (
    <>
      <header className={classes.header}>
        <nav className={classes.list}>
          <ul>
            <li >
              <Link to="/">Home</Link>
            </li>
            <li >
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavigationBar;
