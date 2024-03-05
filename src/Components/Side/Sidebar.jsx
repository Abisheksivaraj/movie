import { React, useState } from "react";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.jpg";
import { MdFavoriteBorder } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { HiLanguage } from "react-icons/hi2";
import { MdSubscriptions } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import Popup from "./popup";
import Navbar from "../Nav/Navbar";

const SideBar = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handletoggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <div
        className={`z-20  top-0 left-0 w-16 h-[30rem] flex flex-col items-center justify-center
                bg-[rgba(47,47,47,0.6)]  shadow-[#ff9637]/50 dark:bg-gray-900 shadow-lg mt-[6rem] ml-5  rounded-3xl fixed ${
                  isDarkMode ? "dark" : "light"
                }`}
      >
        <img
          src={profile}
          alt=""
          className="profile"
          onClick={setIsOpenPopup.bind(this, true)}
        />
        {isOpenPopup && <Popup setIsOpenPopup={setIsOpenPopup} />}
        {/* <Divider /> */}
        <Link to="/Fav">
          <SideBarIcon
            icon={<MdFavoriteBorder size={32} />}
            text={"Favorite"}
          />
        </Link>
        <Link to="/Categories">
          <SideBarIcon icon={<BiCategoryAlt size={32} />} text={"Categories"} />
        </Link>
        <Link to="/Language">
          <SideBarIcon icon={<HiLanguage size={32} />} text={"Language"} />
        </Link>
        <Link to="/Subscription">
          <SideBarIcon
            icon={<MdSubscriptions size="30" />}
            text={"Subscription"}
          />
        </Link>
        {/* <Divider /> */}
        <Link to="/Login">
          <SideBarIcon icon={<IoLogOutOutline size="28" />} text={"Logout"} />
        </Link>
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100 ">{text}</span>
  </div>
);

// const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
