import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const MovieCard = ({ movie, addToFavorites }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  const [showButton, setShowButton] = useState(false);

  const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };

  return (
    <div
      className="hover:scale-[1.1]  transition duration-[500ms] flex flex-col items-center text-center px-[10%]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {movie.poster_path ? (
        <div
          className={`relative transition duration-[500ms] h-[17rem] w-[12rem] rounded-xl`}
        >
          <img
            src={`${IMAGE_PATH}${movie.poster_path}`}
            alt=""
            className="h-[17rem] w-[12rem] rounded-xl ml-5"
          />
          {showButton && (
            <button
              onClick={() => addToFavorites(movie)}
              className="absolute inset-0 w-full h-full left-5 rounded-xl flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-[500ms] text-white"
            >
              <div className="flex items-center hover:h-8 hover:w-[full] hover:bg-white hover:text-black hover:p-2 hover:rounded-md font-semibold">
                <FaHeart className="text-[red] mr-1" />
                <p className=" ">Add to Favorites</p>
              </div>
            </button>
          )}
        </div>
      ) : null}
      <p className="absolute left-[7rem] bottom-[13rem] p-1 text-[1rem]  font-semibold rounded-md text-white  hover:w-[full] hover:bg-white hover:text-black  hover:rounded-md  cursor-pointer">
        Watch Trailer
      </p>
      <h5
        className="text-[1.5rem] mt-2 text-[white] font-serif font-semibold  text-center"
        id="color"
      >
        {movie.title}
      </h5>
    </div>
  );
};

export default MovieCard;
