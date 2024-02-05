// import { React, useState } from "react";
// import profile from "../../assets/profile.jpg";
// import { MdFavoriteBorder } from "react-icons/md";
// import { BiCategoryAlt } from "react-icons/bi";
// import { HiLanguage } from "react-icons/hi2";
// import { MdSubscriptions } from "react-icons/md";
// import { IoLogOutOutline } from "react-icons/io5";

// const Sidebar = () => {
//   const [isOpenPopup, setIsOpenPopup] = useState(false);
//   return (
//    ` <div className="fixed">
//       <div className="flex-1 flex h-[30rem]  mt-[6rem] w-[10rem] rounded-lg bg-black  p-3 ml-5">
//         <div className="mt-6 text-center">
//           <ul className="flex flex-col gap-[3rem] text-[white]">
//             <li>
//               <img
//                 src={profile}
//                 alt=""
//                 className="profile"
//                 onClick={setIsOpenPopup.bind(this, true)}
//               />
//               {isOpenPopup && <Popup setIsOpenPopup={setIsOpenPopup} />}
//             </li>
//             <li className="side">
//               <MdFavoriteBorder />
//               <span>Favorites</span>
//             </li>
//             <li className="side">
//               <BiCategoryAlt />
//               <span>Favorites</span>
//             </li>
//             <li className="side">
//               <HiLanguage />
//               <span>Favorites</span>
//             </li>
//             <li className="side">
//               <MdSubscriptions />
//               <span>Favorites</span>
//             </li>
//             <li className="text-[red] text-[2rem] cursor-pointer scale-[1.2] hover:scale-[1.3]  transition duration-[400ms]">
//               <IoLogOutOutline />
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     <div>

//       <aside></aside>
//       <main className="w-[calc(100-3.8rem)] ml-auto">

//     <div className="2xl:container mx-auto space-y-6">
//       <div className="h-16 border-b border-[white]">

//       </div>
//     </div>

//       </main>
//     </div>`
//   );
// };

// export default Sidebar;

import { React, useState } from "react";
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
  return (
    <div>
      <Navbar />
      <div
        className="fixed top-0 left-0 w-16 h-[30rem] flex flex-col items-center justify-center
                bg-[rgba(47,47,47,0.6)] shadow-lg shadow-[#ff9637]/50 dark:bg-gray-900 shadow-lg mt-[6rem] ml-5  rounded-3xl "
      >
        <img
          src={profile}
          alt=""
          className="profile"
          onClick={setIsOpenPopup.bind(this, true)}
        />
        {isOpenPopup && <Popup setIsOpenPopup={setIsOpenPopup} />}
        {/* <Divider /> */}
        <SideBarIcon icon={<MdFavoriteBorder size={32} />} />
        <SideBarIcon icon={<BiCategoryAlt size={32} />} />
        <SideBarIcon icon={<HiLanguage size={32} />} />
        <SideBarIcon icon={<MdSubscriptions size="30" />} />
        {/* <Divider /> */}
        <SideBarIcon icon={<IoLogOutOutline size="28" />} />
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text = "hai" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

// const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
