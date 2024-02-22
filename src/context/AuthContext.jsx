// import { createContext, useEffect, useState } from "react";
// import { Authentication } from "../Firebase";
// import { onAuthStateChanged } from "firebase/Auth";

// export const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState({});
//   const [searchKey, setSearchKey] = useState("");

//   useEffect(() => {
//     const unsub = onAuthStateChanged(Authentication, (user) => {
//       setCurrentUser(user);
//     });

//     return () => {
//       unsub();
//     };
//   }, []);

//   return (
//     <AuthContext.Provider value={{ currentUser, searchKey, setSearchKey }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };



import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { storage } from "../Firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  async function CreateAccount(email, password, confirmPassword) {
    const TempName = email;
    const MakeTempName = TempName.slice(0, TempName.indexOf("@"));
    const UserInfo = {
      a_Name: MakeTempName,
      b_Age: "--",
      c_Gender: "--",
      d_Email: email,
      e_Password: password,
      f_Favorite: [],
      g_profile:
        "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg",
    };
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(storage, "FilmTube User", email), UserInfo);
    } catch (error) {
      console.error("Error creating account:", error.message);
    }
  }

  async function LoginAccount(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  }

  async function RemoveAccount() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser || null);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ CreateAccount, LoginAccount, RemoveAccount, user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}

