import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
import { FavoritesProvider } from "./context/FavoriteContext.jsx";
import Login from "../src/Pages/Login";
import Register from "../src/Pages/Register";
import Home from "../src/Components/Nav/Home.jsx";
// import Movies from "./Components/Nav/Movies.jsx";
// import Tv from "./Components/Nav/Tv";
// import Anime from "./Components/Nav/Anime";
import Favorites from "./Components/Side/Favorites.jsx";
import Categories from "./Components/Side/Categories";
import Language from "../src/Components/Side/Language";
import Subscription from "../src/Components/Side/Subscription";
import Routee from "./Components/Route/Root.jsx";
import { DarkModeProvider } from "./context/ThemeContext.jsx";
import { ProfileProvider } from "./context/ProfileContext.jsx";
import Tamil from "./LanguagePage/Tamil.jsx";
import Telugu from "./LanguagePage/Telugu.jsx";
import Kannada from "./LanguagePage/Kannada.jsx";
import Malayalam from "./LanguagePage/Malayalam.jsx";
import English from "./LanguagePage/English.jsx";
import Hindi from "./LanguagePage/Hindi.jsx";

import MovieDetails from "./MovieDetails.jsx";

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
                    {/* <Route path="/Movies" element={<Movies />} /> */}
                    {/* <Route path="/Tv" element={<Tv />} /> */}
                    {/* <Route path="/Anime" element={<Anime />} /> */}
                    <Route path="/Favorites" element={<Favorites />} />
                    <Route path="/Categories" element={<Categories />} />
                    <Route path="/Language" element={<Language />} />
                    <Route path="/Subscription" element={<Subscription />} />
                    <Route path="/Fav" element={<Favorites />} />
                    <Route path="/Tamil" element={<Tamil />} />
                    <Route path="/Telugu" element={<Telugu />} />
                    <Route path="/Kannada" element={<Kannada />} />
                    <Route path="/Malayalam" element={<Malayalam />} />
                    <Route path="/Hindi" element={<Hindi />} />
                    <Route path="/English" element={<English />} />
                    <Route path="/movies/:id" element={<MovieDetails />} />
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
