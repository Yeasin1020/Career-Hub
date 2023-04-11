import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";

import Details from "./Details/Details";
import Blog from "./Blog/Blog";
import ErrorPage from "./ErrorPage/ErrorPage";
import Chart from "./ErrorPage/Chart/Chart";

const router = createBrowserRouter([
  {
    path: "*",
    element:<ErrorPage></ErrorPage>
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/JobCategory.json"),
      },
      {
        path: "/details/:userId",
        element: <Details></Details>,
        loader: async ({params})=> {
          const jobs = await (await fetch("/JobCategory.json")).json();
          const job = await jobs.find(j => j.id == params.userId);
          return job;
        }
      },
      {
        path:"/statistics",
        element:<Chart></Chart>
      },
      
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
