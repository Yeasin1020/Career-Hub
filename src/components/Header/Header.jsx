import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <nav className="justify-between flex m-8">
      <h1 className=" font-bold text-3xl">Search Job</h1>
      <div>
        <Link className="p-3 ml-5 font-normal text-gray-800 font-sans  " to="/">
          Home
        </Link>
        <Link
          className="p-3 ml-5 font-normal text-gray-800 font-sans  "
          to="/statistics"
        >
          Statistics
        </Link>
        <Link
          className="p-3 ml-5 font-normal text-gray-800 font-sans  "
          to="/applied-Jobs"
        >
          Applied Jobs
        </Link>
        <Link
          className="p-3 ml-5 font-normal text-gray-800 font-sans  "
          to="/blog"
        >
          Blog
        </Link>
        
      </div>

      <button
        type="button"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Star Applying
      </button>
    </nav>
  );
};

export default Header;
