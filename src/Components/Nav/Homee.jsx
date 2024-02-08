import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import Slider from "../Side/slider";
import Sidebar from "../Side/Sidebar";
import MovieCard from "../MovieCard";
import { useContext } from "react";

const Homee = () => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "5e154d99ca5ac3638f39919adc68d648";
  const Language = "ta";
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
      },
    });
    console.log(results);
    setMovies(results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const renderMovies = () =>
    movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);

  return (
    <div>
      <div className="relative">
        <Slider />
      </div>

      <div className="container">{renderMovies()}</div>
    </div>
  );
};

export default Homee;

// import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { FaSearch } from "react-icons/fa";
// import Navbar from "../Nav/Navbar";
// import Sidebar from "../Side/Sidebar";
// import MovieCard from "../MovieCard";

// const Homee = () => {
//   console.log(`home component`);
//   const API_URL = "https://api.themoviedb.org/3";
//   const API_KEY = "5e154d99ca5ac3638f39919adc68d648";
//   const Language = "ta";
//   const [movies, setMovies] = useState([]);

//   const fetchMovies = async () => {
//     const {
//       data: { results },
//     } = await axios.get(
//       `${API_URL}/discover/movie?api_key=${API_KEY}&with_original_language=${"ta"}`,
//       {
//         params: {
//           api_key: API_KEY,
//         },
//       }
//     );
//     console.log(results);

//     setMovies(results);
//   };

//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   const renderMovies = () =>
//     movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);

//   return (
//     <div>
//       <Slider />
//       <div className="container">{renderMovies()}</div>
//     </div>
//   );
// };

// export default Homee;
