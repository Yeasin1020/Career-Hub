import React from "react";
import { useLoaderData } from "react-router-dom";
import FeaturedJobCart from "../FeaturedJobCart/FeaturedJobCart";

const FeaturedJobs = ({ jobCategory }) => {
  return (
    <div>
      <h2 className=" text-center font-bold text-5xl">feature section</h2>
      <p className="text-center font-medium mb-5">Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className="  h-96 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10 m-auto">
        {jobCategory.map((cart) => (
          <FeaturedJobCart key={cart.id} cart={cart}></FeaturedJobCart>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
