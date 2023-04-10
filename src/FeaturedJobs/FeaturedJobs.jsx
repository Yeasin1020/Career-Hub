import React from "react";
import { useLoaderData } from "react-router-dom";
import FeaturedJobCart from "../FeaturedJobCart/FeaturedJobCart";

const FeaturedJobs = ({ jobCategory }) => {
  return (
    <div>
      <h2>feature section</h2>
      <div className="  h-96 grid grid-cols-2 gap-10 m-auto">
        {jobCategory.map((cart) => (
          <FeaturedJobCart key={cart.id} cart={cart}></FeaturedJobCart>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
