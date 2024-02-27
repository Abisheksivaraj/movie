import React from "react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const HomeCard = ({ home, addToFavorites }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original/";
  console.log(home);

  const [showButton, setShowButton] = useState(false);

  const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };

  return (
    <div
      className="hover:scale-[1.1]  transition duration-[500ms] flex flex-col items-center text-center px-[10%]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {home.poster_path ? (
        <div
          className={`relative transition duration-[500ms] h-[17rem] w-[12rem] rounded-xl`}
        >
          <img
            src={`${IMAGE_PATH}${home.poster_path}`}
            alt=""
            className="h-[17rem] w-[12rem] rounded-xl ml-5"
          />
          {showButton && (
            <button
              onClick={() => addToFavorites(movie)}
              className="absolute inset-0 w-full h-full left-5 rounded-xl flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-[500ms] text-white"
            >
              <div className="flex items-center hover:h-8 hover:w-[full] hover:bg-white hover:text-black hover:p-2 hover:rounded-md font-semibold">
                <FaHeart className="text-[red] mr-1" />
                <p className=" ">Add to Favorites</p>
              </div>
            </button>
          )}
        </div>
      ) : null}
      <p className="absolute left-[7.5rem] bottom-[13rem] p-2 text-[1rem]  font-semibold rounded-md text-white  hover:w-[full] hover:bg-white hover:text-black  hover:rounded-md  cursor-pointer">
        Watch Trailer
      </p>
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

// HomeCard.js
// import React from "react";

// const HomeCard = ({ home,  }) => {
//   return (
//     <div className="home-card">
//       <img
//         src={`https://image.tmdb.org/t/p/w500/${home.poster_path}`}
//         alt={home.title}
//         className="home-card__image"
//       />
//       <div className="home-card__content">
//         <h3 className="home-card__title">{home.title}</h3>
//         <p className="home-card__overview">{home.overview}</p>

//       </div>
//     </div>
//   );
// };

// export default HomeCard;
