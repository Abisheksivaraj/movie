// import { React, useEffect, useState, useRef } from "react";
// import axios from "axios";
// import AnimeCard from "../AnimeCard";
// import { useSearch } from "../../context/SearchContext";

// const Anime = () => {
//   const API_URL = "https://api.themoviedb.org/3";
//   const { searchQuery } = useSearch();
//   const API_KEY = "5e154d99ca5ac3638f39919adc68d648";
//   const Language = "en-US";
//   const [anime, setAnime] = useState([]);

//   const [page, setPage] = useState(1);
//   const loader = useRef(null);

//   const fetchAnime = async (searchKey = "") => {
//     const type = searchKey ? "search" : "discover";
//     const API_URL_ANIME = `https://api.themoviedb.org/3/${type}/movie`;
//     try {
//       const {
//         data: { results },
//       } = await axios.get(`${API_URL_ANIME}`, {
//         params: {
//           api_key: API_KEY,
//           query: searchQuery,
//           language: Language,
//           page: 1,
//           with_genres: 16,
//           page: page,
//         },
//       });

//       setAnime((prevAnime) => [...prevAnime, ...results]);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchAnime(searchQuery);
//   }, [searchQuery, page]);

//   useEffect(() => {
//     const options = {
//       root: null,
//       rootMargin: "20px",
//       threshold: 1.0,
//     };

//     const observer = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting) {
//         setPage((prevPage) => prevPage + 1);
//       }
//     }, options);

//     if (loader.current) {
//       observer.observe(loader.current);
//     }

//     return () => {
//       if (loader.current) {
//         observer.unobserve(loader.current);
//       }
//     };
//   }, [page]);
//   const renderAnime = () =>
//     anime.map((ani) => (
//       <AnimeCard key={ani.id} anime={ani} addToFavorites={addToFavorites} />
//     ));

//   const addToFavorites = (movie) => {
//     console.log("Added to favorites:", movie);
//   };

//   return (
//     <div>
//       <div className="container">{renderAnime()}</div>
//       <div ref={loader} style={{ marginTop: "20px", textAlign: "center" }}>
//         Loading...
//       </div>
//     </div>
//   );
// };

// export default Anime;
