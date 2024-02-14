import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
import { Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../src/Pages/Login";
import HomePage from "../src/Pages/HomePage";
import Register from "../src/Pages/Register";
import Home from "../src/Components/Nav/Home.jsx"
import Movies from "./Components/Nav/Movies.jsx";
import Tv from "./Components/Nav/Tv";
import Anime from "./Components/Nav/Anime";
import Fav from "../src/Components/Side/Fav";
import Categories from "./Components/Side/Categories";
import Language from "../src/Components/Side/Language";
import Subscription from "../src/Components/Side/Subscription";
import Route from "./Components/Route/Root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Route />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/Movies",
    element: (
      <>
        <Route></Route>
        <Movies />
      </>
    ),
  },
  {
    path: "/Tv",
    element: (
      <>
        <Route></Route>
        <Tv />
      </>
    ),
  },
  {
    path: "/Anime",
    element: (
      <>
        <Route></Route>
        <Anime />
      </>
    ),
  },
  {
    path: "/Fav",
    element: (
      <>
        <Route></Route>
        <Fav />
      </>
    ),
  },
  {
    path: "Categories",
    element: (
      <>
        <Route />
        <Categories />
      </>
    ),
  },
  {
    path: "Language",
    element: (
      <>
        <Route />
        <Language />
      </>
    ),
  },
  {
    path: "Subscription",
    element: (
      <>
        <Route />
        <Subscription />
      </>
    ),
  },
]);

const Router = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchProvider>
        <RouterProvider router={router} />
      </SearchProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
