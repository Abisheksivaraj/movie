import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../Components/MovieCard";


const Tamil = () => {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "5e154d99ca5ac3638f39919adc68d648";
  const [movies, setMovies] = useState([]);
  const [language, setLanguage] = useState("ta"); // Default language is Tamil

  const fetchMovies = async (language) => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: API_KEY,
        with_original_language: language,
      },
    });
    console.log(results);
    setMovies(results);
  };

  useEffect(() => {
    fetchMovies(language);
  }, [language]);

  const renderMovies = () =>
    movies.map((movie) => <LanguageCard key={movie.id} movie={movie} />);

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-[2rem] absolute top-[10rem] left-[10rem]">
        {/* <div className="relative"> */}
        {/* Language selection cards */}

        <button onClick={() => setLanguage("ta")}>
          {" "}
          <div className=" relative">
            <div className=" bg-slate-300 h-[11rem] w-[20rem] rounded-xl relative cursor-pointer hover:scale-[1.1]  transition duration-[400ms]">
              <h1 className="text-[2.5rem] font-japan font-bold absolute left-[10rem] top-[4rem]">
                தமிழ்
              </h1>

              <img
                src={tamil}
                alt=""
                className=" h-[11rem] w-[9rem] absolute top-0"
              />
            </div>
          </div>
        </button>

        <button onClick={() => setLanguage("en")}>
          <div className=" relative">
            <div className=" bg-stone-300 h-[11rem] w-[20rem] rounded-xl relative cursor-pointer hover:scale-[1.1]  transition duration-[400ms]">
              <h1 className="text-[2rem] font-japan font-bold absolute left-[10rem] top-[4rem] p-3">
                English
              </h1>

              <img
                src={english}
                alt=""
                className=" h-[10.9rem] w-[9rem] absolute top-0 left-1"
              />
            </div>
          </div>
        </button>

        <button onClick={() => setLanguage("kn")}>
          {" "}
          <div className=" relative">
            <div className=" bg-gray-400 h-[11rem] w-[20rem] rounded-xl relative cursor-pointer hover:scale-[1.1]  transition duration-[400ms]">
              <h1 className="text-[2rem] font-japan font-bold absolute left-[10rem] top-[4rem] p-3">
                ಕನ್ನಡ
              </h1>

              <img
                src={kannada}
                alt=""
                className=" h-[11rem] w-[9rem] absolute top-0"
              />
            </div>
          </div>
        </button>

        <button onClick={() => setLanguage("ml")}>
          {" "}
          <div className=" relative">
            <div className=" bg-zinc-500 h-[11rem] w-[20rem] rounded-xl relative cursor-pointer hover:scale-[1.1]  transition duration-[400ms]">
              <h1 className="text-[1.8rem] font-japan font-bold absolute left-[9.7rem] top-[4rem]">
                മലയാളം
              </h1>

              <img
                src={malayalam}
                alt=""
                className=" h-[11rem] w-[9rem] absolute top-0"
              />
            </div>
          </div>
        </button>

        <button onClick={() => setLanguage("hi")}>
          {" "}
          <div className=" relative">
            <div className=" bg-stone-500 h-[11rem] w-[20rem] rounded-xl relative cursor-pointer hover:scale-[1.1]  transition duration-[400ms]">
              <h1 className="text-[2.5rem] font-japan font-bold absolute left-[10rem] top-[4rem]">
                हिन्दी
              </h1>

              <img
                src={hindi}
                alt=""
                className=" h-[11rem] w-[9rem] absolute top-0"
              />
            </div>
          </div>
        </button>

        <button onClick={() => setLanguage("te")}>
          {" "}
          <div className=" relative">
            <div className=" bg-slate-500 h-[11rem] w-[20rem] rounded-xl relative cursor-pointer hover:scale-[1.1]  transition duration-[400ms]">
              <h1 className="text-[2.5rem] font-japan font-bold absolute left-[10rem] top-[4rem]">
                తెలుగు
              </h1>

              <img
                src={telugu}
                alt=""
                className=" h-[11rem] w-[9rem] absolute top-0"
              />
            </div>
          </div>
        </button>

        <div className="container">{renderMovies()}</div>
      </div>
    </div>
  );
};

export default Tamil;
