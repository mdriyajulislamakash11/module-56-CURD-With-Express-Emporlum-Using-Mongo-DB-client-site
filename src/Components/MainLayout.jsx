import React from "react";
import Navber from "./Navber";
import Banner from "./Banner";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div>
        {/* Navber */}
        <nav>
          <Navber />
        </nav>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
