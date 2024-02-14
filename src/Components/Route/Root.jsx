import React from "react";
import Navbar from "../Nav/Navbar";
import SideBar from "../Side/Sidebar";
import { Outlet } from "react-router-dom";

const Route = () => {
  return (
    <div>
      <div className="fixed z-10 w-full">
        <Navbar />
      </div>

      <SideBar />
      <Outlet />
    </div>
  );
};

export default Route;
