import React from "react";
import { FaHeart } from "react-icons/fa";

const HomeCard = ({ home, addToFavorites }) => {
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
      ) : null}

      <button onClick={() => addToFavorites(home)} className="relative">
        <FaHeart className="absolute top-[-17rem] left-[3.6rem] h-[3rem] w-[3rem] bg-[#f47878] p-2 text-[2rem] text-[white] rounded-tr-md rounded-br-md " />
        {/* Add to Favorites */}
      </button>

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
