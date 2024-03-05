import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import MovieCard from "../MovieCard";
import { useSearch } from "../../context/SearchContext";

const Movies = () => {
  const { searchQuery } = useSearch();
  const API_KEY = "5e154d99ca5ac3638f39919adc68d648";
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  const fetchMovies = async (searchKey = "") => {
    const type = searchKey ? "search" : "discover";
    const API_URL_MOVIE = `https://api.themoviedb.org/3/${type}/movie`;
    try {
      console.log(searchKey);
      const {
        data: { results },
      } = await axios.get(`${API_URL_MOVIE}`, {
        params: {
          api_key: API_KEY,
          query: searchQuery,
          page: page,
        },
      });

      setMovies((prevMovies) => [...prevMovies, ...results]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(searchQuery);
  }, [searchQuery, page]);

  const addToFavorites = (movie) => {
    console.log("Added to favorites:", movie);
  };

  return (
    <div>
      <div className="container">
        {movies.map((movie, index) => (
          <MovieCard
            key={`${movie.id}-${index}`}
            movie={movie}
            addToFavorites={addToFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;
