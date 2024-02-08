import React, { useEffect, useState } from "react";
import axios from "axios";
import AnimeCard from "../AnimeCard";

const Anime = () => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "5e154d99ca5ac3638f39919adc68d648";
  const Language = "ta";
  const [anime, setAnime] = useState([]);

  const fetchAnime = async () => {
    try {
      const {
        data: { results },
      } = await axios.get(`${API_URL}/discover/tv`, {
        params: {
          api_key: API_KEY,
          language: Language,
          with_keywords: "anime",
        },
      });
      console.log(results);
      setAnime(results);
    } catch (error) {
      console.error("Error fetching anime:", error);
    }
  };

  useEffect(() => {
    fetchAnime();
  }, []);

  const renderAnime = () =>
    anime.map((ani) => <AnimeCard key={ani.id} anime={ani} />);

  return (
    <div>
      <div className="container-tv">{renderAnime()}</div>
    </div>
  );
};

export default Anime;
