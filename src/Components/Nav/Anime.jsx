import React, { useEffect, useState } from "react";
import axios from "axios";
import AnimeCard from "../AnimeCard";
import { useSearch } from "../../context/SearchContext";

const Anime = () => {
  const { searchQuery } = useSearch();
  const API_KEY = "5e154d99ca5ac3638f39919adc68d648";
  const Language = "en-US";
  const [anime, setAnime] = useState([]);
  const [page, setPage] = useState(1);

  const fetchAnime = async (searchKey = "") => {
    const type = searchKey ? "search" : "discover";
    const API_URL_ANIME = `https://api.themoviedb.org/3/${type}/tv`;
    try {
      const {
        data: { results },
      } = await axios.get(API_URL_ANIME, {
        params: {
          api_key: API_KEY,
          query: searchQuery,
          language: Language,
          page: page,
          with_genres: 16,
        },
      });

      setAnime((prevAnime) => [...prevAnime, ...results]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAnime(searchQuery);
  }, [searchQuery, page]);

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
