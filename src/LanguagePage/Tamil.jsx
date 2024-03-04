import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearch } from "../context/SearchContext";
import { Link } from "react-router-dom";

const Tamil = () => {
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
            with_original_language: "ta",
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

  return (
    <div>
      <h1>Tamil Movies</h1>
      <ul className="Container-tamil">
        
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link key={movie.id} to={`/movies/${movie.id}`} className="block">
            <img
              className="h-[25rem] w-[20rem] text-[1.1rem] ml-20 mt-[2rem] text-[white] font-serif font-semibold text-center rounded-xl cursor-pointer hover:scale-[1.1]  transition duration-[500ms] "
              id="color"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            </Link>
            
            <p
              className="text-[1.5rem] mt-[2rem] text-[white] font-serif font-semibold text-center ml-[6rem]"
              id="color"
            >
              {movie.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tamil;
