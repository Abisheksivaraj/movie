import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosHeartDislike } from "react-icons/io";
import { useFavorites } from "../context/FavoriteContext";
import { Link } from "react-router-dom";

const TvCard = ({ tv }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  console.log(tv);

  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const isAlreadyAdded = favorites.some((fav) => fav.id === tv.id);
  const [isFavorite, setIsFavorite] = useState(isAlreadyAdded);
  const [showAlert, setShowAlert] = useState(false);

  const handletoggleFavorite = () => {
    if (isFavorite) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } else {
      setIsFavorite(!isFavorite);
      addToFavorites(tv);
    }
  };

  return (
    <div>
      <div className="relative transition duration-[500ms]  rounded-xl">
        <Link to={`/movies/${tv.id}`}>
          <img
            src={`${IMAGE_PATH}${tv.poster_path}`}
            alt=""
            className="h-[23rem] w-[18rem] text-[1.1rem] ml-20 mt-[2rem] text-[white]  rounded-xl cursor-pointer hover:scale-[1.1]  transition duration-[500ms] "
            id="color"
          />

          <h5 className="text-center pt-7 font-bold text-white text-[1.5rem]">
            {tv.name}
          </h5>
          {tv.vote_average ? (
            <span className="absolute top-3 right-12 text-white h-10 w-10 bg-black p-2 rounded-full border border-green-400">
              {tv.vote_average.toFixed(1)}
            </span>
          ) : null}
        </Link>
        <button onClick={handletoggleFavorite}>
          {isFavorite ? (
            <IoIosHeartDislike className="h-[2.5rem]  w-[3rem] bg-white p-2 text-center rounded-md text-[red]  cursor-pointer absolute bottom-[6.3rem] right-[2.7rem]" />
          ) : (
            <FaHeart className="h-[2.5rem]  w-[3rem] p-2 text-center rounded-md text-[red] cursor-pointer absolute bottom-[6.3rem] right-[2.7rem] bg-white " />
          )}
        </button>
        {showAlert && (
          <div className="absolute bottom-[4.3rem] left-[50%] transform -translate-x-1/2 bg-red-500 px-4 py-2 rounded-md text-white">
            Movie already added to favorites!
          </div>
        )}
      </div>
    </div>
  );
};

export default TvCard;
