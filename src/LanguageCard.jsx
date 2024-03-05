import React from "react";
import { FaHeart } from "react-icons/fa";

const LanguageCard = ({ movie, addToFavorites }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  console.log(movie);
  return (
    <div className="hover:scale-[1.05]  transition duration-[500ms] flex flex-col items-center text-center px-[10%]">
      {movie.poster_path ? (
        <img
          src={`${IMAGE_PATH}${movie.poster_path}`}
          alt=""
          className="h-[17rem] w-[12rem] rounded-xl ml-5"
        />
      ) : null}
      <button onClick={() => addToFavorites(movie)} className="relative">
        <FaHeart className="absolute top-[-17rem] left-[3.6rem] h-[3rem] w-[3rem] bg-[#f47878] p-2 text-[2rem] text-[white] rounded-tr-md rounded-br-md " />
        {/* Add to Favorites */}
      </button>
      <h5
        className="text-[1.5rem] mt-2 text-[white] font-serif font-semibold  text-center"
        id="color"
      >
        {movie.title}
      </h5>
    </div>
  );
};

export default LanguageCard;
