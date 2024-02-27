import React, { createContext, useContext, useState } from "react";
import profile from "../assets/profile.jpg";

const ProfileContext = createContext();

export const useProfile = () => {
  return useContext(ProfileContext);
};

export const ProfileProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({
    name: "A.S.Abishek",
    email: "abisheksivaraj2001@gmail.com",
    image: profile, // Initial image URL
  });

  const updateProfileImage = (imageURL) => {
    setProfileData((prevData) => ({
      ...prevData,
      image: imageURL,
    }));
  };

  return (
    <ProfileContext.Provider
      value={{ profileData, setProfileData, updateProfileImage }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
