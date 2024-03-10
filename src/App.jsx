import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
import { FavoritesProvider } from "./context/FavoriteContext.jsx";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Components/Nav/Home";
import ForgotPassword from "./Pages/ForgotPassword.jsx";
import Tv from "./Components/Nav/Tv";
import Anime from "./Components/Nav/Anime.jsx";
import Movies from "./Components/Nav/Movies.jsx";
import Favorites from "./Components/Side/Favorites";
import Categories from "./Components/Side/Categories";
import Language from "./Components/Side/Language";
import Subscription from "./Components/Side/Subscription";
import Routee from "./Components/Route/Root";
import { DarkModeProvider } from "./context/ThemeContext.jsx";
import { ProfileProvider } from "./context/ProfileContext.jsx";
import Tamil from "./LanguagePage/Tamil";
import Telugu from "./LanguagePage/Telugu";
import Kannada from "./LanguagePage/Kannada";
import Malayalam from "./LanguagePage/Malayalam";
import English from "./LanguagePage/English";
import Hindi from "./LanguagePage/Hindi";

import MovieDetails from "./MovieDetails";

// Genre

import AdventureCard from "./Components/GenrePage/AdventureCard.jsx";
import ActionCard from "./Components/GenrePage/ActionCard.jsx";
import AnimationCard from "./Components/GenrePage/AnimationCard.jsx";
import ComedyCard from "./Components/GenrePage/ComedyCard.jsx";
import CrimeCard from "./Components/GenrePage/CrimeCard.jsx";
import DramaCard from "./Components/GenrePage/DramaCard.jsx";
import DocumentryCard from "./Components/GenrePage/DocumentryCard.jsx";
import HorrorCard from "./Components/GenrePage/HorrorCard.jsx";
import HistoryCard from "./Components/GenrePage/HistoryCard.jsx";
import FamilyCard from "./Components/GenrePage/FamilyCard.jsx";
import FantasyCard from "./Components/GenrePage/FantasyCard.jsx";
import FictionCard from "./Components/GenrePage/FictionCard.jsx";
import MysteryCard from "./Components/GenrePage/MysteryCard.jsx";
import MusicCard from "./Components/GenrePage/MusicCard.jsx";
import WarCard from "./Components/GenrePage/WarCard.jsx";
import WesternCard from "./Components/GenrePage/WesternCard.jsx";
import RomanceCard from "./Components/GenrePage/RomanceCard.jsx";
import ThrillerCard from "./Components/GenrePage/ThrillerCard.jsx";

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
                    <Route path="/login" element={<Login />} />
                    <Route path="/Forgot" element={<ForgotPassword />} />
                    <Route path="/Tv" element={<Tv />} />
                    <Route path="/Movies" element={<Movies />} />
                    <Route path="/Anime" element={<Anime />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/language" element={<Language />} />
                    <Route path="/subscription" element={<Subscription />} />
                    <Route path="/fav" element={<Favorites />} />
                    <Route path="/tamil" element={<Tamil />} />
                    <Route path="/telugu" element={<Telugu />} />
                    <Route path="/kannada" element={<Kannada />} />
                    <Route path="/malayalam" element={<Malayalam />} />
                    <Route path="/hindi" element={<Hindi />} />
                    <Route path="/english" element={<English />} />
                    <Route path="/movies/:id" element={<MovieDetails />} />
                    <Route path="/movies/:id" element={<MovieDetails />} />

                    {/* Genre */}

                    <Route path="/ActionFilm" element={<ActionCard />} />
                    <Route path="/AdventureFilm" element={<AdventureCard />} />
                    <Route path="/AnimationFilm" element={<AnimationCard />} />
                    <Route path="/CrimeFilm" element={<CrimeCard />} />
                    <Route path="/ComedyFilm" element={<ComedyCard />} />
                    <Route path="/DramaFilm" element={<DramaCard />} />
                    <Route
                      path="/DocumentryFilm"
                      element={<DocumentryCard />}
                    />
                    <Route path="/HorrorFilm" element={<HorrorCard />} />
                    <Route path="/ThrillerFilm" element={<ThrillerCard />} />
                    <Route path="/HistoryFilm" element={<HistoryCard />} />
                    <Route path="/FamilyFilm" element={<FamilyCard />} />
                    <Route path="/FictionFilm" element={<FictionCard />} />
                    <Route path="/FantasyFilm" element={<FantasyCard />} />
                    <Route path="/MysteryFilm" element={<MysteryCard />} />
                    <Route path="/MusicFilm" element={<MusicCard />} />
                    <Route path="/WarFilm" element={<WarCard />} />
                    <Route path="/RomanceFilm" element={<RomanceCard />} />
                    <Route path="/WesternFilm" element={<WesternCard />} />
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
