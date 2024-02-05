import { React, useState } from "react";
import "../../../src/App.css";
import logo from "../../assets/logo1.png";
import { FaSearch } from "react-icons/fa";
import { TbSun } from "react-icons/tb";
import Homee from "./Homee";
import { IoMoonOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  // console.log();
  const { searchKey, setSearchKey } = useContext(AuthContext);
  // const { searchKey, setsearchKey } = useState("");
  console.log(searchKey);
  const searchMovies = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="flex items-center justify-evenly  fixed z-10  w-[70rem] ml-[6rem] rounded-full bg-[rgba(47,47,47,0.6)] shadow-lg shadow-[#ff9637]/30 mt-2">  
        <div className="flex items-center">
          <img src={logo} alt="" className="h-[5rem] w-[4rem]" />
          <h1 className=" text-white font-logo text-[1.75rem]" id="movie">
            MOVIE HUB
          </h1>
        </div>

        <div>
          <ul className="flex items-center gap-[5rem]  ">
            <li className="home">HOME</li>
            <li className="shows">TV SHOWS</li>
            <li className="animi">ANIMATIONS</li>
          </ul>
        </div>

        <div className="flex items-center h-[2rem]  w-[8rem] bg-black p-4 rounded-md">
          <input
            type="search"
            placeholder="Search"
            className="bg-black placeholder:text-[white] font-nav  outline-none font-[300]  text-[white] text-[1rem]  w-[5rem] "
            onSubmit={searchMovies}
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <label>
            <FaSearch className="text-[#ff9637] cursor-pointer" />
          </label>
        </div>
        <div className="h-[2rem]  w-[2rem] p-1 bg-black text-center rounded-md text-[white] text-[1.5rem] cursor-pointer hover:bg-[#ff9637] scale-[1.2] hover:scale-[1.3]  transition duration-[400ms]">
          <TbSun />
        </div>
      </div>
      <Homee />
    </div>
  );
};

export default Navbar;
