import React from "react";
import profile from "../assets/profile.jpg";
import { MdFavoriteBorder } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { HiLanguage } from "react-icons/hi2";
import { IoLogOutOutline } from "react-icons/io5";
import Slider from "./slider";

const Sidebar = () => {
  return (
    <div>
      <div className="flex-1 flex h-[25rem]  mt-[5rem] w-12 rounded-md bg-black  p-3 relative">
        <div className="mt-5 text-center">
          <ul className="flex flex-col gap-[3rem] text-[white]">
            <li>
              <img src={profile} alt="" className="profile" />
            </li>
            <li className="side">
              <MdFavoriteBorder />
            </li>
            <li className="side">
              <BiCategoryAlt />
            </li>
            <li className="side">
              <HiLanguage />
            </li>
            <li className="text-[red] text-[2rem] cursor-pointer scale-[1.2] hover:scale-[1.3]  transition duration-[400ms]">
              <IoLogOutOutline />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-2 w-[71rem] absolute top-[7rem] left-[6rem]">
        <Slider />
      </div>
    </div>
  );
};

export default Sidebar;
