import React from "react";
import { Link, NavLink } from "react-router-dom";

// Images
import Action from "../../assets/genre-image/action.png";
import Adventure from "../../assets/genre-image/adventure.png";
import animation from "../../assets/genre-image/animation.png";
import comedy from "../../assets/genre-image/comedy.png";
import crime from "../../assets/genre-image/crime.png";
import documentary from "../../assets/genre-image/documentary.png";
import drama from "../../assets/genre-image/drama.png";
import family from "../../assets/genre-image/family.png";
import fantasy from "../../assets/genre-image/fantasy.png";
import history from "../../assets/genre-image/history.png";
import horror from "../../assets/genre-image/horror.png";
import musical from "../../assets/genre-image/musical.png";
import mystery from "../../assets/genre-image/mystery.png";
import romance from "../../assets/genre-image/romance.png";
import scifi from "../../assets/genre-image/sci-fi.png";
import thriller from "../../assets/genre-image/thriller.png";
import war from "../../assets/genre-image/war.png";
import western from "../../assets/genre-image/western.png";

// Genre
import ActionFilm from "../GenrePage/ActionCard";
import AdventureFilm from "../GenrePage/AdventureCard";
import AnimationFilm from "../GenrePage/AnimationCard";
import CrimeFilm from "../GenrePage/CrimeCard";
import ComedyFilm from "../GenrePage/ComedyCard";
import DramaFilm from "../GenrePage/DramaCard";
import DocumentryFilm from "../GenrePage/DocumentryCard";
import HorrorFilm from "../GenrePage/HorrorCard";
import FamilyFilm from "../GenrePage/FamilyCard";
import FantasyFilm from "../GenrePage/FantasyCard";
import FictionFilm from "../GenrePage/FictionCard";
import RomanceFilm from "../GenrePage/RomanceCard";
import ThrillerFilm from "../GenrePage/ThrillerCard";
import MysteryFilm from "../GenrePage/MysteryCard";
import MusicFilm from "../GenrePage/MusicCard";
import WarFilm from "../GenrePage/WarCard";
import WesternFilm from "../GenrePage/WesternCard";
import HistoryFilm from "../GenrePage/HistoryCard";

const Categories = () => {
  return (
    <div className="relative">
      <div className="container-genre">
        <div className="text-[white]">
          <Link to={"/ActionFilm"}>
            <img
              src={Action}
              alt=""
              className="text-[white] hover:scale-[1.5]  transition duration-[500ms]"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <span className="">Action</span>
        </div>

        <div>
          <Link to={"/AdventureFilm"}>
            <img
              src={Adventure}
              alt=""
              className="text-[white] ml-5 hover:scale-[1.5]  transition duration-[500ms]"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <span className="">Adventure</span>
        </div>

        <div>
          <Link to={"/AnimationFilm"}>
            <img
              src={animation}
              alt=""
              className="text-[white] ml-5 h-[4rem] hover:scale-[1.5]  transition duration-[500ms] "
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <span className="">Animation</span>
        </div>

        <div>
          <Link to={"/ComedyFilm"}>
            <img
              src={comedy}
              alt=""
              className="text-[white] ml-2 hover:scale-[1.5]  transition duration-[500ms]"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <span className="text-center">Comedy</span>
        </div>

        <div>
          <Link to={"/CrimeFilm"}>
            <img
              src={crime}
              alt=""
              className="text-[white] ml-3 h-[4rem] hover:scale-[1.5]  transition duration-[500ms]"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <span className="text-center">Crime</span>
        </div>

        <div>
          <Link to={"/DocumentryFilm"}>
            <img
              src={documentary}
              alt=""
              className="text-[white] ml-6 hover:scale-[1.5]  transition duration-[500ms]"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <span className="text-center">Documentary</span>
        </div>

        <div>
          <Link to={"/DramaFilm"}>
            <img
              src={drama}
              alt=""
              className="text-[white] hover:scale-[1.5]  transition duration-[500ms]"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <span className="text-center ml-4">Drama</span>
        </div>

        <div>
          <Link to={"/FamilyFilm"}>
            <img
              src={family}
              alt=""
              className="text-[white] h-[4rem] mt-7 hover:scale-[1.5]  transition duration-[500ms]"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <span className="text-center">Family</span>
        </div>

        <div>
          <Link to={"/FantasyFilm"}>
            <img
              src={fantasy}
              alt=""
              className="text-[white] mt-7 hover:scale-[1.5]  transition duration-[500ms]"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <span className="text-center">Fantasy</span>
        </div>

        <div>
          <Link to={"/HistoryFilm"}>
            <img
              src={history}
              alt=""
              className="text-[white] mt-7 hover:scale-[1.5]  transition duration-[500ms]"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <span className="text-center">History</span>
        </div>

        <div>
          <Link to={"/HorrorFilm"}>
            <img
              src={horror}
              alt=""
              className="text-[white] ml-3 hover:scale-[1.5]  transition duration-[500ms]"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <span className="text-center">Horror</span>
        </div>

        <div>
          <Link to={"/MusicFilm"}>
            <img
              src={musical}
              alt=""
              className="text-[white] ml-2 hover:scale-[1.5]  transition duration-[500ms]"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <span className="text-center">Music</span>
        </div>

        <div>
          <Link to={"/MysteryFilm"}>
            <img
              src={mystery}
              alt=""
              className="text-[white] ml-3 hover:scale-[1.5]  transition duration-[500ms]"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <span className="text-center">Mystery</span>
        </div>

        <div>
          <Link to={"/RomanceFilm"}>
            <img
              src={romance}
              alt=""
              className="text-[white] ml-3 hover:scale-[1.5]  transition duration-[500ms]"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <span className="text-center">Romance</span>
        </div>

        <div className="">
          <Link to={"/FictionFilm"}>
            <img
              src={scifi}
              alt=""
              className="text-[white] ml-3 hover:scale-[1.5]  transition duration-[500ms]"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <span className="text-center">Science-fiction</span>
        </div>

        <div className="col-start-2">
          <Link to={"/ThrillerFilm"}>
            <img
              src={thriller}
              alt=""
              className="text-[white] hover:scale-[1.5]  transition duration-[500ms]"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <span className="text-center ml-4">Thriller</span>
        </div>

        <div className="col-start-3">
          <Link to={"/WarFilm"}>
            <img
              src={war}
              alt=""
              className="text-[white] mt-4 h-[5rem] hover:scale-[1.5]  transition duration-[500ms]"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <span className="text-center ml-5">War</span>
        </div>

        <div className="col-start-4 ">
          <Link to={"/WesternFilm"}>
            <img
              src={western}
              alt=""
              className="text-[white] mt-4 h-[5rem] hover:scale-[1.5]  transition duration-[500ms]"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <span className="text-center">Western</span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
