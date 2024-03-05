import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import TvCard from "../TvCard";
import { useSearch } from "../../context/SearchContext";

const Tv = () => {
  const { searchQuery } = useSearch();
  const API_KEY = "5e154d99ca5ac3638f39919adc68d648";
  const [tvShows, setTvShows] = useState([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  const fetchTvShows = async (searchKey = "") => {
    const type = searchKey ? "search" : "discover";
    const API_URL_TV = `https://api.themoviedb.org/3/${type}/tv`;

    try {
      const {
        data: { results },
      } = await axios.get(API_URL_TV, {
        params: {
          api_key: API_KEY,
          query: searchQuery,
          page: page,
        },
      });
      setTvShows((prevTv) => [...prevTv, ...results]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTvShows(searchQuery);
  }, [searchQuery, page]);

  const addToFavorites = (tv) => {
    console.log("Added to favorites:", tv);
  };

  return (
    <div>
      <div className="container">
        {tvShows.map((tv, index) => (
          <TvCard
            key={`${tv.id}-${index}`}
            tv={tv}
            addToFavorites={addToFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default Tv;
