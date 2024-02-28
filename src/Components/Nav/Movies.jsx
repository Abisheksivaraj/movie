import React from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import MovieCard from "../MovieCard";
import { useSearch } from "../../context/SearchContext";

const Movies = () => {
  const { searchQuery } = useSearch();
  const API_KEY = "5e154d99ca5ac3638f39919adc68d648";
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  // console.log(searchQuery);
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

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    }, options);

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [page]); // Watch the page state for changes

  const addToFavorites = (movie) => {
    console.log("Added to favorites:", movie);
  };

  const renderMovies = () =>
    movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} addToFavorites={addToFavorites} />
    ));

  return (
    <div>
      <div className="container">{renderMovies()}</div>
      <div ref={loader} style={{ marginTop: "20px", textAlign: "center" }}>
        Loading...
      </div>
    </div>
  );
};

export default Movies;
