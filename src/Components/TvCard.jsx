import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useFavorites } from "../context/FavoriteContext";

const TvCard = ({ tv }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  console.log(tv);

  const [showButton, setShowButton] = useState(false);

  const { favorites, addToFavorites } = useFavorites();

  const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };

  const handleAddToFavorites = () => {
    const isAlreadyAdded = favorites.some((fav) => fav.id === tv.id);
    if (isAlreadyAdded) {
      alert("This movie is already added to favorites.");
    } else {
      addToFavorites(tv);
    }
  };

  return (
    <div
      className="hover:scale-[1.1]  transition duration-[500ms] flex flex-col items-center text-center px-[10%]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {tv.poster_path ? (
        <div
          className={`relative transition duration-[500ms] h-[17rem] w-[12rem] rounded-xl`}
        >
          <img
            src={`${IMAGE_PATH}${tv.poster_path}`}
            alt=""
            className="h-[17rem] w-[12rem] rounded-xl ml-5 mt-[5rem]"
          />
          {showButton && (
            <button
              onClick={handleAddToFavorites}
              className="absolute inset-0 w-full h-full left-5 rounded-xl flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-[500ms] text-white   mt-[5rem]"
            >
              <div className="flex items-center hover:h-8 hover:w-[full] hover:bg-white hover:text-black hover:p-2 hover:rounded-md font-semibold">
                <FaHeart className="text-[red] mr-1" />
                <p className=" ">
                  {favorites.some((fav) => fav.id === tv.id)
                    ? "Added to Favorites"
                    : "Add to Favorites"}
                </p>
              </div>
            </button>
          )}
        </div>
      ) : null}
      <p className="absolute left-[7rem] bottom-[13rem] p-1 text-[1rem]  font-semibold rounded-md text-white  hover:w-[full] hover:bg-white hover:text-black  hover:rounded-md  cursor-pointer mt-5">
        Watch Trailer
      </p>
      <h5
        className="text-[1.1rem] mt-[5rem] text-[white] font-serif font-semibold  text-center"
        id="color"
      >
        {tv.name}
      </h5>
    </div>
  );
};

export default TvCard;
