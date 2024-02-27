import React from "react";
import Navbar from "../Nav/Navbar";
import SideBar from "../Side/Sidebar";

const Routee = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <SideBar />
    </div>
  );
};

export default Routee;
