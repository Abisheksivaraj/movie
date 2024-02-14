import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
import { Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../src/Pages/Login";
import Home from "../src/Pages/Home";
import Register from "../src/Pages/Register";
import Homee from "./Components/Nav/Homee";
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
        element: <Homee />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
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
