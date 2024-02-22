import React from "react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import MovieCard from "../MovieCard";
import { useSearch } from "../../context/SearchContext";

const Movies = () => {
  console.log(useSearch());

  const { searchQuery } = useSearch();
  // console.log(useSearch());
  const API_KEY = "5e154d99ca5ac3638f39919adc68d648";
  // const Language = "ta";
  const [movies, setMovies] = useState([]);

  console.log(searchQuery);
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
        },
      });
      console.log(results);
      setMovies(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("inside useeffect " + searchQuery);
    fetchMovies(searchQuery);
  }, []);

  useEffect(() => {
    console.log("inside useeffect " + searchQuery);
    fetchMovies(searchQuery);
  }, [searchQuery]);

  const addToFavorites = (movie) => {
    console.log("Added to favorites:", movie);
  };

  const renderMovies = () =>
    movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} addToFavorites={addToFavorites} />
    ));

  return (
    <div>
      <div className="container-Anime">{renderMovies()}</div>
    </div>
  );
};

export default Movies;
