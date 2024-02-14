import React from "react";

const HomeCard = ({ home }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original/";
  console.log(home);
  return (
    <div className="hover:scale-[1.05] transition duration-[500ms] flex flex-col items-center text-center px-[10%]">
      {home.poster_path ? (
        <img
        id="path"
          src={`${IMAGE_PATH}${home.poster_path}`}
          alt=""
          className="h-[17rem] w-[12rem] rounded-xl ml-5"
        />
      ):null}

      <h5
        className="text-[1.5rem] mt-2 text-[white] font-serif font-semibold text-center"
        id="color"
      >
        {home.title}
      </h5>
    </div>
  );
};

export default HomeCard;
