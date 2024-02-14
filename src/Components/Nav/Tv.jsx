// import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import TvCard from "../TvCard"

// const Tv = () => {
//   const API_URL = "https://api.themoviedb.org/3";
//   const API_KEY = "5e154d99ca5ac3638f39919adc68d648";
//   const Language = "ta";
//   const [tvShows, setTvShows] = useState([]);

//   const fetchTvShows = async () => {
//     const {
//       data: { results },
//     } = await axios.get(
//       `${API_URL}search/tv
// `,
//       {
//         params: {
//           api_key: API_KEY,
//         },
//       }
//     );
//     console.log(results);
//     setTvShows(results);
//   };

//   useEffect(() => {
//     fetchTvShows();
//   }, []);

//   const renderTvShows = () =>
//     tvShows.map((tv) => <TvCard key={tv.id} tvShows={tv} />);
//   return (
//     <div>
//       <div className="container">{renderTvShows()}</div>
//     </div>
//   );
// };

// export default Tv;

import React, { useEffect, useState } from "react";
import axios from "axios";
import TvCard from "../TvCard";

const Tv = () => {
  // const API_URL = "https://api.themoviedb.org/3/";
  const API_URL_TV = "https://api.themoviedb.org/3/discover/tv";
  const API_KEY = "5e154d99ca5ac3638f39919adc68d648";
  // const Language = "ta";
  const [tvShows, setTvShows] = useState([]);

  const fetchTvShows = async (url) => {
    try {
      const {
        data: { results },
      } = await axios.get(`${url}`, {
        params: {
          api_key: API_KEY,
        },
      });
      // console.log(results);
      setTvShows(results);
    } catch (error) {
      console.error("Error fetching TV shows:", error);
    }
  };

  useEffect(() => {
    fetchTvShows(API_URL_TV);
  }, []);

  const renderTvShows = () =>
    tvShows.map((tv) => <TvCard key={tv.id} tv={tv} />);

  return (
    <div>
      <div className="container-tv">{renderTvShows()}</div>
    </div>
  );
};

export default Tv;
