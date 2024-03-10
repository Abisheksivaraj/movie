import React, { useEffect, useState } from "react";
import axios from "axios";
import AnimeCard from "../AnimeCard";

const Anime = () => {
  const API_KEY = "YOUR_API_KEY";
  const Language = "en-US";
  const [anime, setAnime] = useState([]);
  const [page, setPage] = useState(1);

  const fetchAnime = async () => {
    const API_URL_ANIME = "https://api.themoviedb.org/3/discover/movie";
    try {
      const response = await axios.get(API_URL_ANIME, {
        params: {
          api_key: "5e154d99ca5ac3638f39919adc68d648",
          language: Language,
          page: page,
          with_genres: 16,
        },
      });
      const results = response.data.results;
      setAnime((prevAnime) => [...prevAnime, ...results]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAnime();
  }, [page]);

  const addToFavorites = (anime) => {
    console.log("Added to favorites:", anime);
  };

  return (
    <div>
      <div className="container">
        {anime.map((anime, index) => (
          <AnimeCard
            key={`${anime.id}-${index}`}
            anime={anime}
            addToFavorites={addToFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default Anime;
