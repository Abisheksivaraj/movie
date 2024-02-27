import React from "react";
import { FaHeart } from "react-icons/fa";


const TvCard = ({ tv }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  console.log(tv);
  return (
    <div className="hover:scale-[1.05]  transition duration-[500ms] flex flex-col items-center text-center px-[10%]">
      {tv.poster_path ? (
        <img
          src={`${IMAGE_PATH}${tv.poster_path}`}
          alt=""
          className="h-[17rem] w-[12rem] rounded-xl ml-5"
        />
      ) : null}
      <button onClick={() => addToFavorites(home)} className="relative">
        <FaHeart className="absolute top-[-17rem] left-[3.6rem] h-[3rem] w-[3rem] bg-[#f47878] p-2 text-[2rem] text-[white] rounded-tr-md rounded-br-md " />
        {/* Add to Favorites */}
      </button>
      <h5
        className="text-[1.5rem] mt-2 text-[white] font-serif font-semibold  text-center"
        id="color"
      >
        {tv.name}
      </h5>
    </div>
  );
};

export default TvCard;
