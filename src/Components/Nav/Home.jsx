import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeCard from "../HomeCard";
import { useSearch } from "../../context/SearchContext";

const Home = () => {
  const { searchQuery } = useSearch();
  const API_KEY = "5e154d99ca5ac3638f39919adc68d648";
  const [home, setHome] = useState([]);

  const fetchHome = async (searchKey = "") => {
    const type = searchKey ? "search" : "trending";
    const timeWindow = searchKey ? "" : "week"; // Use time window only for trending movies
    const API_URL_TRENDING = `https://api.themoviedb.org/3/${type}/movie/${timeWindow}`;
    try {
      const {
        data: { results },
      } = await axios.get(API_URL_TRENDING, {
        params: {
          api_key: API_KEY,
          query: searchQuery,
        },
      });
      setHome(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHome(searchQuery);
  }, [searchQuery]);

  const renderHome = () =>
    home.map((home) => <HomeCard key={home.id} home={home} />);

  return (
    <div>
      <div className="container">{renderHome()}</div>
    </div>
  );
};

export default Home;
