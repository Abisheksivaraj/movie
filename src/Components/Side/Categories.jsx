import React from "react";
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

import ActionCard from "../GenrePage/ActionCard";
import AdventureCard from "../GenrePage/AdventureCard";
import AnimationCard from "../GenrePage/AnimationCard";
import ComedyCard from "../GenrePage/ComedyCard";
import CrimeCard from "../GenrePage/CrimeCard";
import DocumentryCard from "../GenrePage/DocumentryCard";
import DramaCard from "../GenrePage/DramaCard";
import FamilyCard from "../GenrePage/FamilyCard";
import FantasyCard from "../GenrePage/FantasyCard";
import FictionCard from "../GenrePage/FictionCard";
import HistoryCard from "../GenrePage/HistoryCard";
import HorrorCard from "../GenrePage/HorrorCard";
import MusicCard from "../GenrePage/MusicCard";
import MysteryCard from "../GenrePage/MysteryCard";
import RomanceCard from "../GenrePage/RomanceCard";
import ThrillerCard from "../GenrePage/ThrillerCard";
import WarCard from "../GenrePage/WarCard";
import WesternCard from "../GenrePage/WesternCard";

import { Link,NavLink } from "react-router-dom";

const Categories = () => {
  return (
    <div className="relative">
      <div className="container-genre">
        <div className="text-[white]">
          <Link to={"/ActionCard"}>
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
          <Link to={"/AdventureCard"}>
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
          <Link to={"/AnimationCard"}>
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
          <Link to={"/ComedyCard"}>
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
          <Link to={"/CrimeCard"}>
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
          <Link to={"/DocumentryCard"}>
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
          <Link to={"/DramaCard"}>
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
          <Link to={"/FamilyCard"}>
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
          <Link to={"/FantasyCard"}>
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
          <Link to={"/HistoryCard"}>
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
          <Link to={"/HorrorCard"}>
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
          <Link to={"/MusicCard"}>
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
          <Link to={"/MysteryCard"}>
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
          <Link to={"/RomanceCard"}>
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
          <Link to={"/FictionCard"}>
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
          <Link to={"/ThrillerCard"}>
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
          <Link to={"/WarCard"}>
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
          <Link to={"/WesternCard"}>
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
