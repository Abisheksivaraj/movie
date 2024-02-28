import React from "react";
import {
  useFavorites,
  useFavoritesActions,
} from "../../context/FavoriteContext";
import "../../App.css"; // Corrected import path for CSS file

const Favorites = () => {
  const { favorites } = useFavorites();
  const { removeFavorite } = useFavoritesActions();

  const handleRemoveFavorite = (index) => {
    removeFavorite(index);
  };

  return (
    <div className="fav-container">
      <h2 className="title">Favorites</h2>
      <div className="flex flex-wrap">
        {favorites.map((item, index) => (
          <div key={index} className="w-1/4 p-2">
            <div className="border border-gray-200 rounded p-2">
              <div className="poster-container">
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  alt={item.title}
                  className="h-40 w-full object-cover rounded"
                />
              </div>
              <div className="details-container text-center mt-2">
                <p className="text-white">{item.title}</p>
                <button
                  className="delete-button bg-red-500 text-white px-2 py-1 mt-2 rounded"
                  onClick={() => handleRemoveFavorite(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
