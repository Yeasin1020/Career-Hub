import React from "react";
import JobCategory from "../JobCategory/JobCategory";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const jobCategory = useLoaderData();
  return (
    <div>
      <section className="grid grid-cols-2 gap-6 m-24 h-96">
        <div>
          <h1 className=" font-bold text-ellipsis text-7xl">
            One Step <br /> Closer To Your <br /> Dream Job
          </h1>
          <br />
          <p className="">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <br />
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Star Applying
          </button>
        </div>
        <div className=" w-96 h-96">
          <img src="/src/img/0x0.jpg" alt="" />
        </div>
      </section>
      <section>
        <div>
          <h2 className=" text-center font-bold text-ellipsis text-5xl">
            Job Category List
          </h2>
          <br />
          <p className="text-center">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-4 m-10 gap-5">
          {jobCategory.map((category) => (
            <JobCategory key={category.id} category={category}></JobCategory>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
