import React from "react";

const MovieCard = ({ movie }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  console.log(movie);
  return (
    <div className="">
      {movie.poster_path ? (
        <img
          src={`${IMAGE_PATH}${movie.poster_path}`}
          alt=""
          className="h-[25rem] w-[30rem]"
        />
      ) : null}
      <h5 className="text-[1.5rem] text-[white]">{movie.title}</h5>
    </div>
  );
};

export default MovieCard;
