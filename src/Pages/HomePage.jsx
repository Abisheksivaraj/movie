import React from "react";
import { useState, useContext } from "react";
import Navbar from "../Components/Nav/Navbar";
import Sidebar from "../Components/Side/Sidebar";
import Slider from "../Components/Side/slider";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Slider />
    </div>
  );
};

export default HomePage;
