import React, { createContext, useState, useContext } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const updateSearchQuery = (query) => {
    setSearchQuery(query);
  };

  const searchMovie = (searchFunc) => searchFunc();

  const value = {
    searchQuery,
    updateSearchQuery,
    searchMovie,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
