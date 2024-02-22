import { React, useEffect, useState } from "react";
import axios from "axios";
import AnimeCard from "../AnimeCard";
import { useSearch } from "../../context/SearchContext";

const Anime = () => {
  const API_URL = "https://api.themoviedb.org/3";
  const { searchQuery } = useSearch();
  const API_KEY = "5e154d99ca5ac3638f39919adc68d648";
  const Language = "en-US";
  const [anime, setAnime] = useState([]);

  const [page, setPage] = useState(1);

  const fetchAnime = async (searchKey = "") => {
    const type = searchKey ? "search" : "discover";
    const API_URL_ANIME = `https://api.themoviedb.org/3/${type}/movie`;
    try {
      const {
        data: { results },
      } = await axios.get(`${API_URL_ANIME}`, {
        params: {
          api_key: API_KEY,
          query: searchQuery,
          language: Language,
          page: 1,
          with_genres: 16, // Genre ID for Animation
        },
      });
      console.log(results);
      setAnime(results);
    } catch (error) {
      console.error("Error fetching anime:", error);
    }
  };
  console.log(anime);

  useEffect(() => {
    console.log("inside useeffect " + searchQuery);
    fetchAnime(searchQuery);
  }, []);

  useEffect(() => {
    console.log("inside useeffect " + searchQuery);
    fetchAnime(searchQuery);
  }, [searchQuery]);
  const addToFavorites = (movie) => {
    console.log("Added to favorites:", movie);
  };
  // const handleScroll = () => {
  //   console.log("Height:", document.documentElement.scrollHeight);
  //   console.log("Top:", document.documentElement.scrollTop);
  //   console.log("Window:", window.innerHeight);

  //   if(window.innerHeight + document.documentElement.scrollTop + >= document.documentElement.scrollHeight)
  // };

  // useEffect(() => {
  //   window.addEventListener;
  //   "scroll", handleScroll;
  // });

  const renderAnime = () =>
    anime.map((ani) => (<AnimeCard key={ani.id} anime={ani} addToFavorites={addToFavorites} />));

  return (
    <div>
      <div className="container-tv">{renderAnime()}</div>
    </div>
  );
};

export default Anime;
