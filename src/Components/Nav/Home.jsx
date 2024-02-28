import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import HomeCard from "../HomeCard";
import { useSearch } from "../../context/SearchContext";

const Home = () => {
  const { searchQuery } = useSearch();
  const API_KEY = "5e154d99ca5ac3638f39919adc68d648";
  const [home, setHome] = useState([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  const fetchHome = async (searchKey = "") => {
    const type = searchKey ? "search" : "trending";
    const API_URL_TRENDING = `https://api.themoviedb.org/3/${type}/movie/day?language=en-US/`;

    try {
      const {
        data: { results },
      } = await axios.get(`${API_URL_TRENDING}`, {
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

  const renderHome = () =>
    home.map((home) => (
      <HomeCard key={home.id} home={home} addToFavorites={addToFavorites} />
    ));

  return (
    <div>
      <div className="container">{renderHome()}</div>
      <div ref={loader} style={{ marginTop: "20px", textAlign: "center" }}>
        Loading...
      </div>
    </div>
  );
};

export default Home;
