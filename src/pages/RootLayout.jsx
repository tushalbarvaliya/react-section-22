import React from "react";
import NavigationBar from "../components/NavigationBar";
import { Outlet } from "react-router-dom";
import classes from "./RootLayout.module.css";

export const RootLayout = () => {
  return (
    <>
      <NavigationBar />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
};
