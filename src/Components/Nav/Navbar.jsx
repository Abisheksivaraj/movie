import React, { useState } from "react";
import "../../../src/App.css";
import logo from "../../assets/logo1.png";
import { FaSearch } from "react-icons/fa";
import { TbSun } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";

const Navbar = () => {
  const { updateSearchQuery } = useSearch();
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (name) => {
    setActiveLink(name);
  };

  const searchMovies = (e) => {
    e.preventDefault();
    updateSearchQuery(e.target.value);
  };

  return (
    <div className="w-full flex justify-center px-[2.5%] pt-4  z-10 relative">
      <div className="flex items-center justify-evenly w-[90%] rounded-full bg-[rgba(47,47,47,0.6)] shadow-lg shadow-[#ff9637]/30 mt-2">
        <div className="flex items-center">
          <img src={logo} alt="" className="h-[5rem] w-[4rem]" />
          <h1 className="text-white font-logo text-[1.75rem]" id="movie">
            MOVIE HUB
          </h1>
        </div>

        <div>
          <ul className="flex items-center gap-[5rem]">
            <li className={`home ${activeLink === "HOME" ? "active" : ""}`}>
              <Link
                to="/home"
                onClick={() => handleClick("HOME")}
                className={activeLink === "HOME" ? "active" : ""}
              >
                HOME
              </Link>
            </li>

            <li className={`home ${activeLink === "MOVIES" ? "active" : ""}`}>
              <Link
                to="/movies"
                onClick={() => handleClick("MOVIES")}
                className={activeLink === "MOVIES" ? "active" : ""}
              >
                MOVIES
              </Link>
            </li>

            <li
              className={`shows ${activeLink === "TV SHOWS" ? "active" : ""}`}
            >
              <Link
                to="/TV"
                onClick={() => handleClick("TV SHOWS")}
                className={activeLink === "TV SHOWS" ? "active" : ""}
              >
                TV SHOWS
              </Link>
            </li>

            <li
              className={`animi ${activeLink === "ANIMATIONS" ? "active" : ""}`}
            >
              <Link
                to="/Anime"
                onClick={() => handleClick("ANIMATIONS")}
                className={activeLink === "ANIMATIONS" ? "active" : ""}
              >
                ANIMATIONS
              </Link>
            </li>
          </ul>
        </div>

        <div className="h-[2rem]  w-[2rem] p-1 bg-black text-center rounded-md text-[white] text-[1.5rem] cursor-pointer hover:bg-[#ff9637] scale-[1.2] hover:scale-[1.3]  transition duration-[400ms]">
          <TbSun />
        </div>
      </div>

      <div className="flex items-center h-[2.8rem] ml-5 w-[63rem] bg-[rgba(47,47,47,0.6)] p-4  absolute top-[7rem] right-[8rem]  rounded-full">
        <input
          type="search"
          placeholder="Search"
          className="bg-[rgba(47,47,47,0.6)] placeholder:text-[white] font-nav  outline-none font-[300]  text-[white] text-[2rem]  w-[69rem] h-[2.8rem] rounded-full p-6 "
          onSubmit={searchMovies}
          onChange={(e) => updateSearchQuery(e.target.value)}
        />
        <label>
          <FaSearch className="text-[#ff9637] cursor-pointer  text-[1.5rem] " />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
