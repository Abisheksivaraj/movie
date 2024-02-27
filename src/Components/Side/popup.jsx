import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import profile from "../../assets/profile.jpg";
import { useProfile } from "../../context/ProfileContext";
// import { useHistory } from "react-router-dom";

const Popup = ({ setIsOpenPopup }) => {
  const { profileData, setProfileData } = useProfile(); // Using ProfileContext
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(profileData.name);
  const [newEmail, setNewEmail] = useState(profileData.email);
  const history = useHistory();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfileData({ ...profileData, name: newName, email: newEmail });
    setIsEditing(false);
    // Update the profile data (e.g., send a request to the server)
  };

  const handleDelete = () => {
    // Delete the profile (e.g., send a request to the server)
    setProfileData(null); // Assuming setProfileData(null) removes the profile
    setIsOpenPopup(false);
    history.push("/login"); // Redirect to the login page
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData({ ...profileData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.7)] absolute left-0 z-[111111] flex justify-center items-center">
      <div className="flex items-center justify-center">
        <div className="h-[25rem] w-[45rem] bg-[#e6e5e5] rounded-3xl relative shadow-lg shadow-[#ff9637]/80">
          <div>
            <h1 className="p-2 text-[3rem] text-center text-[#1f1e1e] uppercase font-bold">
              User Profile
            </h1>
          </div>
          <div className="absolute left-[18rem]">
            <img
              src={profileData.image}
              alt=""
              className="h-[8rem] w-[8rem] border-[5px] rounded-full border-[#ff9637]"
            />
            {isEditing && (
              <input
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                className="mt-2"
              />
            )}
          </div>

          <div className="absolute bottom-[5rem] left-[10rem] text-[1.5rem] font-bold">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="border-b-2 border-gray-400 outline-none"
                />
                <br />
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="border-b-2 border-gray-400 outline-none"
                />
              </>
            ) : (
              <>
                <h3 className="text-[#4d4a4a]">
                  Name: <span className="text-[navy]">{profileData.name}</span>{" "}
                </h3>
                <h3>
                  Mail: <span className="text-[navy]">{profileData.email}</span>{" "}
                </h3>
              </>
            )}
          </div>

          <div className="absolute bottom-5 right-20">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="text-[white] text-[1.5rem] rounded-md font-semibold bg-[green] p-1 w-[6rem] hover:bg-[#66fc66]"
              >
                Save
              </button>
            ) : (
              <button
                onClick={handleEdit}
                className="text-[white] text-[1.5rem] rounded-md font-semibold bg-[blue] p-1 w-[6rem] hover:bg-[#6699ff] mr-10"
              >
                Edit
              </button>
            )}
          </div>

          <div className="absolute right-5 top-5 h-[2rem] flex items-center justify-center w-[2rem] cursor-pointer rounded-md bg-gray-600">
            <ImCancelCircle
              onClick={() => setIsOpenPopup(false)}
              className="text-[1.5rem]"
            />
          </div>

          <div className="absolute bottom-5 right-5">
            <button
              onClick={handleDelete}
              className="text-[white] text-[1.5rem] rounded-md font-semibold bg-[red] p-1 w-[6rem] hover:bg-[#fc6666]"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
