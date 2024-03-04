// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import TvCard from "../TvCard";
// import { useSearch } from "../../context/SearchContext";

// const Tv = () => {
//   const { searchQuery } = useSearch();
//   const API_KEY = "5e154d99ca5ac3638f39919adc68d648";
//   const [tvShows, setTvShows] = useState([]);
//   const [page, setPage] = useState(1);
//   const loader = useRef(null);

//   const fetchTvShows = async (searchKey = "") => {
//     const type = searchKey ? "search" : "discover";
//     const API_URL_TV = `https://api.themoviedb.org/3/${type}/tv`;

//     try {
//       const {
//         data: { results },
//       } = await axios.get(`${API_URL_TV}`, {
//         params: {
//           api_key: API_KEY,
//           query: searchQuery,
//           page: page,
//         },
//       });
//       // console.log(results);
//       setTvShows((prevTv) => [...prevTv, ...results]);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     console.log("inside useeffect " + searchQuery);
//     fetchTvShows(searchQuery);
//   }, []);

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
//   }, [page]); // Watch the page state for changes

//   const addToFavorites = (movie) => {
//     console.log("Added to favorites:", movie);
//   };

//   const renderTvShows = () =>
//     tvShows.map((tv) => (
//       <TvCard key={tv.id} tv={tv} addToFavorites={addToFavorites} />
//     ));

//   return (
//     <div>
//       <div className="container">{renderTvShows()}</div>
//       <div ref={loader} style={{ marginTop: "20px", textAlign: "center" }}>
//         Loading...
//       </div>
//     </div>
//   );
// };

// export default Tv;
