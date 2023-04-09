import React from "react";

const JobCategory = ({ category }) => {
  const { img, name, job_sit } = category;
  return (
    <div className=" bg-[#7E90FE0D]  p-10 rounded-sm">
      <div className=" w-14 h-14">
        <img src={img} alt="" />
      </div>
      <p className=" font-semibold mt-4">{name}</p>
      <p className=" text-gray-500 mt-4">{job_sit}</p>
    </div>
  );
};

export default JobCategory;
