import { React, useState } from "react";
import profile from "../../assets/profile.jpg";
import { MdFavoriteBorder } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { HiLanguage } from "react-icons/hi2";
import { IoLogOutOutline } from "react-icons/io5";
import Popup from "./popup";

const Sidebar = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(true);
  return (
    <div>
      <div className="flex-1 flex h-[24rem]  mt-[5rem] w-12 rounded-md bg-black  p-3">
        <div className="mt-6 text-center">
          <ul className="flex flex-col gap-[3rem] text-[white]">
            <li>
              <img
                src={profile}
                alt=""
                className="profile"
                onClick={setIsOpenPopup.bind(this, true)}
              />
              {isOpenPopup && <Popup setIsOpenPopup={setIsOpenPopup} />}
            </li>
            <li className="side">
              <MdFavoriteBorder />
            </li>
            <li className="side">
              <BiCategoryAlt />
            </li>
            <li className="side">
              <HiLanguage />
            </li>
            <li className="text-[red] text-[2rem] cursor-pointer scale-[1.2] hover:scale-[1.3]  transition duration-[400ms]">
              <IoLogOutOutline />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
