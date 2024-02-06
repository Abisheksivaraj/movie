import React from "react";
import { ImCancelCircle } from "react-icons/im";
import profile from "../../assets/profile.jpg";
import { useState } from "react";

const Popup = ({ setIsOpenPopup }) => {
  return (
    <div className="w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.7)] absolute  left-0 z-[111111] flex justify-center items-center">
      <div className=" flex items-center justify-center">
        <div className=" h-[25rem] w-[45rem] bg-[#e6e5e5] rounded-3xl relative shadow-lg shadow-[#ff9637]/80">
          <div>
            <h1 className="p-2 text-[3rem] text-center  text-[#1f1e1e] uppercase font-bold">
              User Profile
            </h1>
          </div>
          <div className="absolute left-[18rem]">
            <img
              src={profile}
              alt=""
              className="h-[8rem] w-[8rem] border-[5px] rounded-full border-[#ff9637] rounded-full"
            />
          </div>

          <div className="absolute bottom-[5rem] left-[10rem] text-[1.5rem] font-bold">
            <h3 className="text-[#4d4a4a]">
              Name: <span className="text-[navy]">A.S.Abishek</span>{" "}
            </h3>
            <h3>
              Mail:{" "}
              <span className="text-[navy]">abisheksivaraj2001@gmail.com</span>{" "}
            </h3>
          </div>

          <div className="absolute bottom-5 right-10">
            <button className="text-[white] text-[1.5rem] rounded-md font-semibold bg-[red] p-1 w-[6rem] hover:bg-[#fc6666]">
              Delete
            </button>
          </div>

          <div className="absolute right-5 top-5 h-[2rem]  flex items-center justify-center w-[2rem] cursor-pointer rounded-md bg-gray-600">
            <ImCancelCircle
              onClick={setIsOpenPopup.bind(this, false)}
              className=" text-[1.5rem]  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
