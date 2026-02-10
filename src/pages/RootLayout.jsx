import { Outlet } from "react-router-dom";

import NavigationBar from "../components/NavigationBar";

export const RootLayout = () => {
  return (
    <>
      <NavigationBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
