import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useFavorites } from "../context/FavoriteContext";

const AnimeCard = ({ anime }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  const [showButton, setShowButton] = useState(false);
  const { favorites, addToFavorites } = useFavorites();

  const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };

  const handleAddToFavorites = () => {
    const isAlreadyAdded = favorites.some((fav) => fav.id === anime.id);
    if (isAlreadyAdded) {
      alert("This movie is already added to favorites.");
    } else {
      addToFavorites(anime);
    }
  };

  return (
    <div
      className="hover:scale-[1.1]  transition duration-[500ms] flex flex-col items-center text-center px-[10%]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {anime.poster_path ? (
        <div
          className={`relative transition duration-[500ms] h-[17rem] w-[12rem] rounded-xl`}
        >
          <img
            src={`${IMAGE_PATH}${anime.poster_path}`}
            alt=""
            className="h-[17rem] w-[12rem] rounded-xl ml-2 mt-[4rem]"
          />
          {showButton && (
            <button
              onClick={handleAddToFavorites}
              className="absolute inset-0 w-full h-full left-5 rounded-xl flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-[500ms] text-white ml-[-0.75rem] mt-[4rem]"
            >
              <div className="flex items-center hover:h-8 hover:w-[full] hover:bg-white hover:text-black hover:p-2 hover:rounded-md font-semibold ">
                <FaHeart className="text-[red] mr-1" />
                <p className=" ">
                  {favorites.some((fav) => fav.id === anime.id)
                    ? "Added to Favorites"
                    : "Add to Favorites"}
                </p>
              </div>
            </button>
          )}
        </div>
      ) : null}
      <p className="absolute left-[7rem] bottom-[13rem] p-1 text-[1rem]  font-semibold rounded-md text-white  hover:w-[full] hover:bg-white hover:text-black  hover:rounded-md  cursor-pointer">
        Watch Trailer
      </p>
      <h5
        className="text-[1.1rem] mt-[5rem] text-[white] font-serif font-semibold  text-center"
        id="color"
      >
        {anime.title}
      </h5>
    </div>
  );
};

export default AnimeCard;
