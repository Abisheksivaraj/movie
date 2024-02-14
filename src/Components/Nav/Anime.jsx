import {React,useEffect, useState } from "react";
import axios from "axios";
import AnimeCard from "../AnimeCard";

const Anime = () => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "5e154d99ca5ac3638f39919adc68d648";
  const Language = "en-US";
  const [anime, setAnime] = useState([]);

  const [page, setPage] = useState(1);

  const fetchAnime = async () => {
    try {
      const {
        data: { results },
      } = await axios.get(`${API_URL}/discover/movie`, {
        params: {
          api_key: API_KEY,
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
    fetchAnime();
  }, []);

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
    anime.map((ani) => <AnimeCard key={ani.id} anime={ani} />);

  return (
    <div>
      <div className="container-tv">{renderAnime()}</div>
    </div>
  );
};

export default Anime;
