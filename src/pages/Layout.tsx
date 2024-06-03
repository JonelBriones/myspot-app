import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavLinks from "../components/NavLinks";

const Layout = () => {
  return (
    <div className="mx-4">
      <Navbar />
      <div className="flex h-screen">
        <NavLinks />
        <div className="flex-1 border-t border-gray-300 p-4">
          <div className="max-w-[1280px] mx-auto  ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
