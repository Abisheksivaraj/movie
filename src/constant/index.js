import axios from "axios";

const API_KEY = "5e154d99ca5ac3638f39919adc68d648";
const Language = "ta";

const fetchMovies = async (url) => {
  const {
    data: { results },
  } = await axios.get(`${url}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return results;
};

export { fetchMovies, API_KEY };
