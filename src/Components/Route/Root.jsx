import React from "react";
import Navbar from "../Nav/Navbar";
import SideBar from "../Side/Sidebar";
import { Outlet } from "react-router-dom";

const Route = () => {
  return (
    <div>
      <Navbar />
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Route;
