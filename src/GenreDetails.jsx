// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { AiFillCloseCircle } from "react-icons/ai";

// const GenreDetails = () => {
//   const { id } = useParams();
//   const [languageDetails, setLanguageDetails] = useState(null);
//   const [cast, setCast] = useState([]);

//   const imgPath = "https://image.tmdb.org/t/p/w1280";
//   const castImgPath = "https://image.tmdb.org/t/p/w400"; // Increased size for cast images

//   useEffect(() => {
//     const fetchLanguageDetails = async () => {
//       try {
//         const response = await fetch(
//           `https://api.themoviedb.org/3/movie/${id}?api_key=5e154d99ca5ac3638f39919adc68d648&language=en-US`
//         );
//         const data = await response.json();
//         setLanguageDetails(data);
//       } catch (error) {
//         console.error("Error fetching movie details:", error);
//       }
//     };

//     const fetchCastDetails = async () => {
//       try {
//         const response = await fetch(
//           `https://api.themoviedb.org/3/movie/${id}/credits?api_key=5e154d99ca5ac3638f39919adc68d648`
//         );
//         const data = await response.json();
//         if (data.cast) {
//           setCast(data.cast.slice(0, 10));
//         } else {
//           console.error("No cast details found");
//         }
//       } catch (error) {
//         console.error("Error fetching cast details:", error);
//       }
//     };

//     fetchLanguageDetails();
//     fetchCastDetails();
//   }, [id]);

//   if (!languageDetails) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div
//       className="h-screen flex justify-center items-center"
//       style={{
//         backgroundImage: `url(${imgPath}${languageDetails.backdrop_path})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: "90rem",
//       }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center w-full h-full">
//         <div className="py-8 px-4 md:px-0 max-w-screen-xl mx-auto">
//           <Link to="/home" className="text-white absolute top-[1rem] left-2">
//             <AiFillCloseCircle size={32} />
//           </Link>
//           <div className="flex justify-between items-center">
//             <div>
//               <h1 className="text-3xl font-bold text-white ">
//                 {languageDetails.original_title}
//               </h1>
//               <p className="pt-5 text-l font-bold text-white">
//                 Release Year:{" "}
//                 {languageDetails.release_date
//                   ? languageDetails.release_date.slice(0, 4)
//                   : "N/A"}
//               </p>
//               <p className="text-lg text-white mt-10">
//                 {languageDetails.overview}
//               </p>
//               <p className="text-lg text-white mt-2">
//                 Release Date: {languageDetails.release_date}
//               </p>
//               <p className="text-lg text-white mt-2">
//                 Genres:{" "}
//                 {languageDetails.genres.map((genre) => genre.name).join(", ")}
//               </p>
//             </div>
//             <div className="flex items-start ">
//               <button className="bg-red-600 text-white py-2 px-4 rounded-md mr-10  mt-5 z-10">
//                 Watch Trailer
//               </button>
//             </div>
//           </div>
//           <div className="mt-8">
//             <h2 className="text-2xl font-bold text-white mb-4">Top Cast:</h2>
//             <div className="flex flex-wrap justify-center gap-8">
//               {cast.map((actor) => (
//                 <div key={actor.id} className="flex flex-col items-center">
//                   <img
//                     className="rounded-full p-4 "
//                     src={`${castImgPath}${actor.profile_path}`}
//                     alt={actor.name}
//                     style={{
//                       width: "220px",
//                       height: "220px",
//                       objectFit: "fill",
//                     }}
//                   />
//                   <p className="text-lg mt-2 text-white">{actor.name}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GenreDetails;
