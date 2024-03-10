import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import YouTube from "react-youtube";
import axios from "axios";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState(null);

  const imgPath = "https://image.tmdb.org/t/p/w1280";
  const castImgPath = "https://image.tmdb.org/t/p/w400";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=5e154d99ca5ac3638f39919adc68d648`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    const fetchCastDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=5e154d99ca5ac3638f39919adc68d648`
        );
        const data = await response.json();
        if (data.cast) {
          setCast(data.cast.slice(0, 10));
        } else {
          console.error("No cast details found");
        }
      } catch (error) {
        console.error("Error fetching cast details:", error);
      }
    };

    fetchMovieDetails();
    fetchCastDetails();
  }, [id]);

  const fetchMovie = async (id) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}`,
        {
          params: {
            api_key: "5e154d99ca5ac3638f39919adc68d648",
            append_to_response: "videos",
          },
        }
      );
      const { data } = response;
      if (data.videos && data.videos.results) {
        const trailer = data.videos.results.find(
          (vid) => vid.type === "Trailer"
        );
        setTrailer(trailer ? trailer : data.videos.results[0]);
      }
      setMovieDetails(data);
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  };

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${imgPath}${movieDetails.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90rem",
      }}
    >
      <div className="absolute inset-0 flex justify-center items-center w-full h-full">
        <div className="py-8 px-4 md:px-0 max-w-screen-xl mx-auto">
          <Link to="/home" className="text-white absolute top-[1rem] left-2">
            <AiFillCloseCircle size={32} />
          </Link>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white ">
                {movieDetails.original_title}
              </h1>
              <p className="pt-[50rem] text-l font-bold text-white pl-[7rem]">
                Release Year:
                {movieDetails.release_date
                  ? movieDetails.release_date.slice(0, 4)
                  : "N/A"}
              </p>
              <p className="text-lg text-white mt-10 pl-[7rem]">
                {movieDetails.overview}
              </p>
              <p className="text-lg text-white mt-2 pl-[7rem]">
                Release Date: {movieDetails.release_date}
              </p>
            </div>
            <div className="flex items-start">
              {trailer ? (
                <>
                  <YouTube
                    className="absolute top-[8rem] left-[20rem] h-[28rem] w-[40rem]"
                    videoId={trailer.key}
                    // containerClassName={"youtube-container amru"}
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <button
                    onClick={() => setTrailer(null)}
                    className="button close-video"
                  >
                    Close
                  </button>
                </>
              ) : (
                <button
                  onClick={() => fetchMovie(id)}
                  className="button play-video"
                >
                  Play Trailer
                </button>
              )}
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-4 pl-[7rem]">
              Top Cast:
            </h2>
            <div className="flex flex-wrap justify-center gap-8 pl-[5rem]">
              {cast.map((actor) => (
                <div key={actor.id} className="flex flex-col items-center">
                  <img
                    className="rounded-full p-4 "
                    src={`${castImgPath}${actor.profile_path}`}
                    alt={actor.name}
                    style={{
                      width: "220px",
                      height: "220px",
                      objectFit: "fill",
                    }}
                  />
                  <p className="text-lg mt-2 text-white">{actor.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
