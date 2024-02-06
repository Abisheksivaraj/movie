import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../src/Pages/Register";
import Login from "../src/Pages/Login";
import Navbar from "../src/Components/Nav/Navbar";
import Home from "../src/Pages/Home";

import Homee from "./Components/Nav/Homee";
import Tv from "./Components/Nav/Tv";
import Anime from "./Components/Nav/Anime";
import Fav from "../src/Components/Side/Fav";
import Categories from "./Components/Side/Categories";
import Language from "../src/Components/Side/Language";
import Subscription from "../src/Components/Side/Subscription";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Anime" element={<Anime />} />
        <Route path="/Homee" element={<Homee />} />
        <Route path="/Tv" element={<Tv />} />
        <Route path="/Fav" element={<Fav />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Language" element={<Language />} />
        <Route path="/Subscription" element={<Subscription />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
