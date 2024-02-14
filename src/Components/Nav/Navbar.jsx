import { React, useState } from "react";
import "../../../src/App.css";
import logo from "../../assets/logo1.png";
import { FaSearch } from "react-icons/fa";
import { TbSun } from "react-icons/tb";
// import Homee from "./Homee";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { IoMoonOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { useSearch } from "../../context/SearchContext";

const Navbar = () => {
  const { updateSearchQuery, searchMovie } = useSearch();

  const searchMovies = (e) => {
    e.preventDefault();
    updateSearchQuery(e.target.value);
  };

  const activeLink =
    "bg-[#ff9637] cursor-pointer scale-[1.2] hover:scale-[1.3]  transition duration-[400ms]";
  const normalLink = "";
  return (
    <div className="w-full flex justify-center px-[2.5%] pt-4 fixed z-10">
      <div className="flex items-center justify-evenly   w-[90%] rounded-full bg-[rgba(47,47,47,0.6)] shadow-lg shadow-[#ff9637]/30 mt-2">
        <div className="flex items-center">
          <img src={logo} alt="" className="h-[5rem] w-[4rem]" />
          <h1 className=" text-white font-logo text-[1.75rem]" id="movie">
            MOVIE HUB
          </h1>
        </div>

        <div>
          <ul className="flex items-center gap-[5rem]  ">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <li className="home">
                <Link to="/home">HOME</Link>
              </li>
            </NavLink>

            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <li className="shows">
                <Link to="/TV">TV SHOWS</Link>
              </li>
            </NavLink>

            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <li className="animi">
                <Link to="/Anime">ANIMATIONS</Link>
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="flex items-center h-[2.8rem] ml-5 w-[10rem] bg-black p-4 rounded-md">
          <input
            type="search"
            placeholder="Search"
            className="bg-black placeholder:text-[white] font-nav  outline-none font-[300]  text-[white] text-[2rem]  w-[5rem] h-[2.8rem] "
            onSubmit={searchMovies}
            onChange={(e) => updateSearchQuery(e.target.value)}
          />
          <label>
            <FaSearch className="text-[#ff9637] cursor-pointer ml-5" />
          </label>
        </div>
        <div className="h-[2rem]  w-[2rem] p-1 bg-black text-center rounded-md text-[white] text-[1.5rem] cursor-pointer hover:bg-[#ff9637] scale-[1.2] hover:scale-[1.3]  transition duration-[400ms]">
          <TbSun />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
