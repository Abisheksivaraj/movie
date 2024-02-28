import React, { useState } from "react";
import "../../../src/App.css";
import logo from "../../assets/logo1.png";
import { FaSearch } from "react-icons/fa";
import { GoX } from "react-icons/go";
import { TbSun } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";
import { TbMoon } from "react-icons/tb";
import "../../App.css";

const Navbar = () => {
  const { updateSearchQuery } = useSearch();
  const [activeLink, setActiveLink] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleCloseClick = () => {
    setIsSearchOpen(false);
  };

  const handletoggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handletoggleLightMode = () => {
    setIsDarkMode(false);
  };
  const handleClick = (name) => {
    setActiveLink(name);
  };

  const searchMovies = (e) => {
    e.preventDefault();
    updateSearchQuery(e.target.value);
  };

  return (
    <div
      className={`w-full flex justify-center px-[2.5%] top-4 z-10 fixed ml-6 ${
        isDarkMode ? "dark" : "light"
      }`}
    >
      <div className="flex items-center justify-evenly w-[95%] rounded-full bg-[rgba(47,47,47,0.6)] shadow-lg shadow-[#ff9637]/30 mt-2">
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
        <div
          className="flex items-center cursor-pointer"
          onClick={handletoggleDarkMode}
        >
          {isDarkMode ? (
            <TbSun className="h-[2rem]  w-[2rem] p-2 bg-black text-center rounded-md text-[white]  cursor-pointer hover:bg-[#ff9637] scale-[1.2] hover:scale-[1.3]  transition duration-[400ms]" />
          ) : (
            <TbMoon className="h-[2rem]  w-[2rem] p-2 bg-black text-center rounded-md text-[white] cursor-pointer hover:bg-[#ff9637] scale-[1.2] hover:scale-[1.3]  transition duration-[400ms]" />
          )}
        </div>

        <div
          className="flex items-center cursor-pointer"
          onClick={handleSearchClick}
        >
          {isSearchOpen ? (
            <GoX className="h-[2rem]  w-[2rem] p-2 bg-black text-center rounded-md text-[white]  cursor-pointer hover:bg-[#ff9637] scale-[1.2] hover:scale-[1.3]  transition duration-[400ms]" />
          ) : (
            <FaSearch className="h-[2rem]  w-[2rem] p-2 bg-black text-center rounded-md text-[white] cursor-pointer hover:bg-[#ff9637] scale-[1.2] hover:scale-[1.3]  transition duration-[400ms]" />
          )}
        </div>
      </div>

      {isSearchOpen && (
        <div className="absolute top-[3.5rem] left-0 right-0 mt-2 p-4 bg-opacity-20 border-none rounded shadow-lg z-10">
          <input
            type="text"
            placeholder="Search for Movies or TV shows..."
            className="outline-none p-2 border-none rounded-md  w-[87%] ml-[5rem] mt-5 text-white bg-black"
            onSubmit={searchMovies}
            onChange={(e) => updateSearchQuery(e.target.value)}
          />
          <div
            className="absolute top-2 right-2 cursor-pointer"
            onClick={handleCloseClick}
          >
            <GoX className="h-4 w-4 text-white" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
