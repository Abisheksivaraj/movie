import React from "react";

const AnimeCard = ({ anime }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  console.log(anime);
  return (
    <div
      className="hover:scale-[1.05]  transition duration-[500ms] flex flex-col items-center text-center px-[10%]"
      id="card"
    >
      {anime.poster_path ? (
        <img
          id="path"
          src={`${IMAGE_PATH}${anime.poster_path}`}
          alt=""
          className="h-[18rem] w-[18rem] rounded-xl ml-5"
        />
      ) : null}
      <h5
        className="text-[1.5rem] mt-2 text-[white] font-serif font-semibold  text-center"
        id="color"
      >
        {anime.title}
      </h5>
    </div>
  );
};

export default AnimeCard;
