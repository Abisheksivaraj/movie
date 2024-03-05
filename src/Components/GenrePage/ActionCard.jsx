import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearch } from "../../context/SearchContext";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useFavorites } from "../../context/FavoriteContext";
import { IoIosHeartDislike } from "react-icons/io";

const ActionCard = () => {
  const [movies, setMovies] = useState([]);
  const { searchQuery } = useSearch();

  useEffect(() => {
    const fetchMovies = async (searchKey = "") => {
      const type = searchKey ? "search" : "discover";
      const API_URL_MOVIES = `https://api.themoviedb.org/3/${type}/movie`;
      try {
        const {
          data: { results },
        } = await axios.get(API_URL_MOVIES, {
          params: {
            api_key: "5e154d99ca5ac3638f39919adc68d648",
            with_genres: "28",
            query: searchQuery,
          },
        });
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies(searchQuery);
  }, [searchQuery]);

  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const isAlreadyAdded = favorites.some((fav) => fav.id === genre.id);
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
      addToFavorites(genre);
    }
  };

  return (
    <div>
      {/* <h1>Tamil Movies</h1> */}
      <div className="Container-tamil">
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link key={movie.id} to={`/movies/${movie.id}`} className="block">
              <img
                className="h-[25rem] w-[20rem] text-[1.1rem] ml-20 mt-[2rem] text-[white] font-serif font-semibold text-center rounded-xl cursor-pointer hover:scale-[1.1]  transition duration-[500ms] "
                id="color"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <h5
                className="text-[1.5rem] mt-[2rem] text-[white] font-serif font-semibold text-center ml-[6rem]"
                id="color"
              >
                {movie.title}
              </h5>
            </Link>
            <button onClick={handletoggleFavorite}>
              {isFavorite ? (
                <IoIosHeartDislike className="h-[2.5rem]  w-[3rem] bg-white p-2 text-center rounded-md text-[red]  cursor-pointer absolute bottom-[4.3rem] right-[2.7rem]" />
              ) : (
                <FaHeart className="h-[2.5rem]  w-[3rem] p-2 text-center rounded-md text-[red] cursor-pointer absolute bottom-[4.3rem] right-[2.7rem] bg-white " />
              )}
            </button>
            {showAlert && (
              <div className="absolute bottom-[4.3rem] left-[50%] transform -translate-x-1/2 bg-red-500 px-4 py-2 rounded-md text-white">
                Movie already added to favorites!
              </div>
            )}
          </li>
        ))}
      </div>
    </div>
  );
};

export default ActionCard;
