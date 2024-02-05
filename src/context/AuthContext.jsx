import { createContext, useEffect, useState } from "react";
import { authentication } from "../Firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(authentication, (user) => {
      setCurrentUser(user);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, searchKey, setSearchKey }}>
      {children}
    </AuthContext.Provider>
  );
};
