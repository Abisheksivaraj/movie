import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
import { FavoritesProvider } from "./context/FavoriteContext.jsx";
import Login from "../src/Pages/Login";
import Register from "../src/Pages/Register";
import Home from "../src/Components/Nav/Home.jsx";
import Movies from "./Components/Nav/Movies.jsx";
import Tv from "./Components/Nav/Tv";
import Anime from "./Components/Nav/Anime";
import Favorites from "./Components/Side/Favorites.jsx";
import Categories from "./Components/Side/Categories";
import Language from "../src/Components/Side/Language";
import Subscription from "../src/Components/Side/Subscription";
import Routee from "./Components/Route/Root.jsx";
import { DarkModeProvider } from "./context/ThemeContext.jsx";
import { ProfileProvider } from "./context/ProfileContext.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <SearchProvider>
          <DarkModeProvider>
            <FavoritesProvider>
              <ProfileProvider>
                <Routee>
                  <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/Movies" element={<Movies />} />
                    <Route path="/Tv" element={<Tv />} />
                    <Route path="/Anime" element={<Anime />} />
                    <Route path="/Favorites" element={<Favorites />} />
                    <Route path="/Categories" element={<Categories />} />
                    <Route path="/Language" element={<Language />} />
                    <Route path="/Subscription" element={<Subscription />} />
                    <Route path="/Fav" element={<Favorites />} />{" "}
                  </Routes>
                </Routee>
              </ProfileProvider>
            </FavoritesProvider>
          </DarkModeProvider>
        </SearchProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
