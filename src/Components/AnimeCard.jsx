import React from "react";

const AnimeCard = ({ ani }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  console.log(ani);
  return (
    <div className="hover:scale-[1.05]  transition duration-[500ms] flex flex-col items-center text-center px-[10%]">
      {ani.poster_path ? (
        <img
          src={`${IMAGE_PATH}${ani.poster_path}`}
          alt=""
          className="h-[18rem] w-[18rem] rounded-xl ml-5"
        />
      ) : null}
      <h5
        className="text-[1.5rem] mt-2 text-[white] font-serif font-semibold  text-center"
        id="color"
      >
        {ani.name}
      </h5>
    </div>
  );
};

export default AnimeCard;
