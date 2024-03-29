import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeCard from "../HomeCard";
import { useSearch } from "../../context/SearchContext";


const Home = () => {
  const { searchQuery } = useSearch();
  const API_KEY = "5e154d99ca5ac3638f39919adc68d648";
  const [home, setHome] = useState([]);
  const [page, setPage] = useState(1);

  const fetchHome = async (searchKey = "") => {
    const type = searchKey ? "search" : "trending";
    const API_URL_TRENDING = `https://api.themoviedb.org/3/${type}/movie/day?language=en-US/`;

    try {
      const {
        data: { results },
      } = await axios.get(API_URL_TRENDING, {
        params: {
          api_key: API_KEY,
          query: searchQuery,
          page: page,
        },
      });

      setHome((prevHome) => [...prevHome, ...results]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHome(searchQuery);
  }, [searchQuery, page]);

  const addToFavorites = (movie) => {
    console.log("Added to favorites:", movie);
  };

  return (
    <div>
      <div className="container">
        {home.map((movie, index) => (
          
            <HomeCard
              key={`${movie.id}-${index}`}
              home={movie}
              addToFavorites={addToFavorites}
            />
          
        ))}
      </div>
    </div>
  );
};

export default Home;
