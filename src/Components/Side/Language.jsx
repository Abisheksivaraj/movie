import React, { useState, useEffect } from "react";

import tamil from "../../assets/language-images/tamil.png";
import telugu from "../../assets/language-images/telugu.png";
import malayalam from "../../assets/language-images/malayalam.png";
import kannada from "../../assets/language-images/kannada.png";
import hindi from "../../assets/language-images/hindi.png";
import english from "../../assets/language-images/english.png";

import Tamil from "../../LanguagePage/Tamil";
import English from "../../LanguagePage/English";
import Telugu from "../../LanguagePage/Telugu";
import Malayalam from "../../LanguagePage/Malayalam";
import Kannada from "../../LanguagePage/Kannada";
import Hindi from "../../LanguagePage/Hindi";
import { Link } from "react-router-dom";

const Language = () => {
  return (
    <div className="relative ">
      <div className="w-full">
        <div className="grid grid-cols-3 gap-[2rem] absolute top-[12rem] left-[10rem]">
          <div className=" relative">
            <div className=" bg-white h-[11rem] hover:shadow-2xl hover:shadow-white w-[20rem] rounded-2xl relative cursor-pointer hover:scale-[1.1]  transition duration-[400ms]">
              <Link to={"/Tamil"}>
                <h1 className="text-[2.5rem] font-japan font-bold absolute left-[10rem] top-[4rem]">
                  தமிழ்
                </h1>
              </Link>
              <Link to={"/Tamil"}>
                <img
                  src={tamil}
                  alt=""
                  className=" h-[11rem] w-[9rem] absolute top-0"
                />
              </Link>
            </div>
          </div>

          <div className=" relative">
            <div className=" bg-slate-500 h-[11rem] w-[20rem] hover:shadow-2xl hover:shadow-slate-500 rounded-xl relative cursor-pointer hover:scale-[1.1]  transition duration-[400ms]">
              <Link to={"/Telugu"}>
                <h1 className="text-[2.5rem] font-japan font-bold absolute left-[10rem] top-[4rem]">
                  తెలుగు
                </h1>
              </Link>
              <Link to={"/Telugu"}>
                <img
                  src={telugu}
                  alt=""
                  className=" h-[11rem] w-[9rem] absolute top-0"
                />
              </Link>
            </div>
          </div>

          <div className=" relative">
            <div className=" bg-gray-400 h-[11rem] w-[20rem] hover:shadow-2xl hover:shadow-gray-400 rounded-xl relative cursor-pointer hover:scale-[1.1]  transition duration-[400ms]">
              <Link to={"/Kannada"}>
                <h1 className="text-[2rem] font-japan font-bold absolute left-[10rem] top-[4rem] p-3">
                  ಕನ್ನಡ
                </h1>
              </Link>
              <Link to={"/Kannada"}>
                <img
                  src={kannada}
                  alt=""
                  className=" h-[11rem] w-[9rem] absolute top-0"
                />
              </Link>
            </div>
          </div>

          <div className=" relative">
            <div className=" bg-zinc-500 h-[11rem] w-[20rem]  hover:shadow-2xl hover:shadow-zinc-500 rounded-xl relative cursor-pointer hover:scale-[1.1]  transition duration-[400ms]">
              <Link to={"/Malayalam"}>
                <h1 className="text-[1.8rem] font-japan font-bold absolute left-[9.7rem] top-[4rem]">
                  മലയാളം
                </h1>
              </Link>

              <Link to={"/Malayalam"}>
                <img
                  src={malayalam}
                  alt=""
                  className=" h-[11rem] w-[9rem] absolute top-0"
                />
              </Link>
            </div>
          </div>

          <div className=" relative">
            <div className=" bg-stone-500 h-[11rem] w-[20rem]  hover:shadow-3xl hover:shadow-stone-500 rounded-xl relative cursor-pointer hover:scale-[1.1]  transition duration-[400ms]">
              <Link to={"/Hindi"}>
                <h1 className="text-[2.5rem] font-japan font-bold absolute left-[10rem] top-[4rem]">
                  हिन्दी
                </h1>
              </Link>
              <Link to={"/Hindi"}>
                <img
                  src={hindi}
                  alt=""
                  className=" h-[11rem] w-[9rem] absolute top-0"
                />
              </Link>
            </div>
          </div>

          <div className=" relative">
            <div className=" bg-stone-300 h-[11rem] w-[20rem]  hover:shadow-2xl hover:shadow-stone-300 rounded-xl relative cursor-pointer hover:scale-[1.1]  transition duration-[400ms]">
              <Link to={"/English"}>
                <h1 className="text-[2rem] font-japan font-bold absolute left-[10rem] top-[4rem] p-3">
                  English
                </h1>
              </Link>

              <Link to={"/English"}>
                <img
                  src={english}
                  alt=""
                  className=" h-[10.9rem] w-[9rem] absolute top-0 left-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
