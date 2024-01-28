import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "../../Components/Nav/Navbar";

const Language = () => {
  return (
    <div className="relative ">
      <Navbar />
      <Sidebar />
      <div className="w-full">
        <div className="grid grid-cols-3 gap-[30rem] absolute top-[10rem] left-[10rem] w-[40rem]">
          <div className="h-[9rem] w-[17rem] bg-white ">01</div>
          <div className="h-[9rem] w-[17rem] bg-white ">02</div>
          <div className="h-[9rem] w-[17rem] bg-white ">03</div>
          <div className="h-[9rem] w-[17rem] bg-white ">04</div>
          <div className="h-[9rem] w-[17rem] bg-white ">05</div>
        </div>
      </div>
    </div>
  );
};

export default Language;
