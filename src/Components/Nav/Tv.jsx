import React, { useEffect, useState } from "react";
import axios from "axios";
import TvCard from "../TvCard";
import { useSearch } from "../../context/SearchContext";

const Tv = () => {
  const { searchQuery } = useSearch();

  const API_KEY = "5e154d99ca5ac3638f39919adc68d648";
  const [tvShows, setTvShows] = useState([]);

  const fetchTvShows = async (searchKey = "") => {
    const type = searchKey ? "search" : "discover";
    const API_URL_TV = `https://api.themoviedb.org/3/${type}/tv`;
    try {
      const {
        data: { results },
      } = await axios.get(`${API_URL_TV}`, {
        params: {
          api_key: API_KEY,
          query: searchQuery,
        },
      });
      // console.log(results);
      setTvShows(results);
    } catch (error) {
      console.error("Error fetching TV shows:", error);
    }
  };

  useEffect(() => {
    console.log("inside useeffect " + searchQuery);
    fetchTvShows(searchQuery);
  }, []);

  useEffect(() => {
    console.log("inside useeffect " + searchQuery);
    fetchTvShows(searchQuery);
  }, [searchQuery]);

  const addToFavorites = (movie) => {
    console.log("Added to favorites:", movie);
  };

  const renderTvShows = () =>
    tvShows.map((tv) => (
      <TvCard key={tv.id} tv={tv} addToFavorites={addToFavorites} />
    ));

  return (
    <div>
      <div className="container-tv">{renderTvShows()}</div>
    </div>
  );
};

export default Tv;
