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

import Action from "./Components/Side/Categories.jsx";
// import ActionCard from "./Components/GenrePage/ActionCard.jsx";
import Adventure from "./Components/Side/Categories.jsx";
import Animation from "./Components/Side/Categories.jsx";
import Crime from "./Components/Side/Categories.jsx";
import Comedy from "./Components/Side/Categories.jsx";
import Music from "./Components/Side/Categories.jsx";
import Fiction from "./Components/Side/Categories.jsx";
import War from "./Components/Side/Categories.jsx";
import Western from "./Components/Side/Categories.jsx";
import Thriller from "./Components/Side/Categories.jsx";
import Mystery from "./Components/Side/Categories.jsx";
import Horror from "./Components/Side/Categories.jsx";
import Fantasy from "./Components/Side/Categories.jsx";
import Family from "./Components/Side/Categories.jsx";
import Drama from "./Components/Side/Categories.jsx";
import Documentry from "./Components/Side/Categories.jsx";
import Romance from "./Components/Side/Categories.jsx";
import History from "./Components/Side/Categories.jsx";

// import ActionCard from "./Components/GenrePage/ActionCard.jsx";

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
                    <Route path="/Login" element={<Login />} />
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
                    {/* <Route path="/Action" element={<Action />} /> */}
                    {/* <Route path="/ActionCard" element={<ActionCard />} /> */}

                    {/* category */}
                    <Route path="/Action" element={<Action />} />
                    <Route path="/Adventure" element={<Adventure />} />
                    <Route path="/Animation" element={<Animation />} />
                    <Route path="/Comedy" element={<Comedy />} />
                    <Route path="/Crime" element={<Crime />} />
                    <Route path="/Documentry" element={<Documentry />} />
                    <Route path="/Drama" element={<Drama />} />
                    <Route path="/Family" element={<Family />} />
                    <Route path="/Fantasy" element={<Fantasy />} />
                    <Route path="/Fiction" element={<Fiction />} />
                    <Route path="/Horror" element={<Horror />} />
                    <Route path="/History" element={<History />} />
                    <Route path="/War" element={<War />} />
                    <Route path="/Music" element={<Music />} />
                    <Route path="/Western" element={<Western />} />
                    <Route path="/Mystery" element={<Mystery />} />
                    <Route path="/movies/:id" element={<MovieDetails />} />
                    {/* <Route path="/Action" element={<Action />} /> */}
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
