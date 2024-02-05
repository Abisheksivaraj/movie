import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "../../Components/Nav/Navbar";
import tamil from "../../assets/language-images/tamil.png";
import telugu from "../../assets/language-images/telugu.png";
import malayalam from "../../assets/language-images/malayalam.png";
import kannada from "../../assets/language-images/kannada.png";
import hindi from "../../assets/language-images/hindi.png";
import english from "../../assets/language-images/english.png";

const Language = () => {
  return (
    <div className="relative ">
      <Navbar />
      <Sidebar />
      <div className="w-full">
        <div className="grid grid-cols-3 gap-[2rem] absolute top-[10rem] left-[10rem]">
          <div className=" relative">
            <div className=" bg-slate-300 h-[11rem] w-[20rem] rounded-xl relative cursor-pointer hover:scale-[1.1]  transition duration-[400ms]">
              <h1 className="text-[2rem] font-japan font-bold absolute left-[10rem] top-[5rem] p-3">
                Tamil
              </h1>
              <h2 className="text-[2.5rem] font-japan font-bold absolute left-[10rem] top-[3rem]">
                தமிழ்
              </h2>

              <img
                src={tamil}
                alt=""
                className=" h-[11rem] w-[9rem] absolute top-0"
              />
            </div>
          </div>

          <div className=" relative">
            <div className=" bg-slate-500 h-[11rem] w-[20rem] rounded-xl relative cursor-pointer hover:scale-[1.1]  transition duration-[400ms]">
              <h1 className="text-[2rem] font-japan font-bold absolute left-[10rem] top-[5rem] p-3">
                Telugu
              </h1>
              <h2 className="text-[2.5rem] font-japan font-bold absolute left-[10rem] top-[3rem]">
                తెలుగు
              </h2>

              <img
                src={telugu}
                alt=""
                className=" h-[11rem] w-[9rem] absolute top-0"
              />
            </div>
          </div>

          <div className=" relative">
            <div className=" bg-gray-400 h-[11rem] w-[20rem] rounded-xl relative cursor-pointer hover:scale-[1.1]  transition duration-[400ms]">
              <h1 className="text-[2rem] font-japan font-bold absolute left-[10rem] top-[5rem] p-3">
                Kannada
              </h1>
              <h2 className="text-[2.5rem] font-japan font-bold absolute left-[10rem] top-[3rem]">
                தமிழ்
              </h2>

              <img
                src={kannada}
                alt=""
                className=" h-[11rem] w-[9rem] absolute top-0"
              />
            </div>
          </div>

          <div className=" relative">
            <div className=" bg-zinc-500 h-[11rem] w-[20rem] rounded-xl relative cursor-pointer hover:scale-[1.1]  transition duration-[400ms]">
              <h1 className="text-[1.8rem] font-japan font-bold absolute left-[10rem] top-[6rem]">
                Malayalam
              </h1>
              <h2 className="text-[1.8rem] font-japan font-bold absolute left-[9.7rem] top-[4rem]">
                മലയാളം
              </h2>

              <img
                src={malayalam}
                alt=""
                className=" h-[11rem] w-[9rem] absolute top-0"
              />
            </div>
          </div>

          <div className=" relative">
            <div className=" bg-stone-500 h-[11rem] w-[20rem] rounded-xl relative cursor-pointer hover:scale-[1.1]  transition duration-[400ms]">
              <h1 className="text-[2rem] font-japan font-bold absolute left-[10rem] top-[5rem] p-3">
                Hindi
              </h1>
              <h2 className="text-[2.5rem] font-japan font-bold absolute left-[10rem] top-[3rem]">
                हिन्दी
              </h2>

              <img
                src={hindi}
                alt=""
                className=" h-[11rem] w-[9rem] absolute top-0"
              />
            </div>
          </div>

          <div className=" relative">
            <div className=" bg-stone-300 h-[11rem] w-[20rem] rounded-xl relative cursor-pointer hover:scale-[1.1]  transition duration-[400ms]">
              <h1 className="text-[2rem] font-japan font-bold absolute left-[10rem] top-[5rem] p-3">
                English
              </h1>

              <img
                src={english}
                alt=""
                className=" h-[10.9rem] w-[9rem] absolute top-0 left-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
























// import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { FaSearch } from "react-icons/fa";
// import Navbar from "../Nav/Navbar";
// import Sidebar from "../Side/Sidebar";
// import MovieCard from "../MovieCard";

// const Homee = () => {
//   const API_URL = "https://api.themoviedb.org/3";
//   const API_KEY = "5e154d99ca5ac3638f39919adc68d648";
//   const Language = "ta";
//   const [movies, setMovies] = useState([]);

//   const fetchMovies = async () => {
//     const {
//       data: { results },
//     } = await axios.get(
//       `${API_URL}/discover/movie?api_key=${API_KEY}&with_original_language=${'ta'}`,
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
//       <div className="relative">
//         <Navbar />
//         <Sidebar />
//       </div>
//       <div className="container">{renderMovies()}</div>
//     </div>
//   );
// };

// export default Homee;
