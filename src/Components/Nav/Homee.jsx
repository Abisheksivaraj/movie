import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import Navbar from "../Nav/Navbar";
import Sidebar from "../Side/Sidebar";
import MovieCard from "../MovieCard"

const Homee = () => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "5e154d99ca5ac3638f39919adc68d648";
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
      },
    });

    setMovies(results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const renderMovies = () =>(
    movies.map(movie =>(
<MovieCard
key={movie.id}
movie={movie}/>
    ))
  )



  return (
    <div>
      <div className="relative">
        <Navbar />
        <Sidebar />
      </div>
      <div className="container">
        {renderMovies()}
      </div>
    </div>
  );
};

export default Homee;