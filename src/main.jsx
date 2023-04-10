import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Details from "./Details/Details";
import Blog from "./Blog/Blog";

const router = createBrowserRouter([
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
        loader: ({params})=> fetch(`JobCategory.json${params.userId}`)
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },

      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
