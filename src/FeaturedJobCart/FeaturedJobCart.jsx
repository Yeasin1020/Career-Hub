import React from "react";

const FeaturedJobCart = ({ cart }) => {
  console.log(cart);
  const {
    companyLogo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    location,
    fulltimeOrPartTime,
    salary,
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences,
    contactInformation,
  } = cart;
  return (
    <div className="border-gray-600 bg-slate-100 rounded-lg p-10">
      <div className="w-36">
        <img src={companyLogo} alt="" />
      </div>
      <h1 className=" font-bold mt-3">{jobTitle}</h1>
      <p>{companyName}</p>
      <div className="flex">
        <button
          type="button"
          className="focus:outline-none text-black  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          {remoteOrOnsite}
        </button>
        <button
          type="button"
          className="focus:outline-none text-black font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          {fulltimeOrPartTime}
        </button>
      </div>

      <div className="flex gap-10">
        <p>{location}</p>
        <p>Salary: {salary}</p>
      </div>
      <br />
      <button
        type="button"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
      >
        view details
      </button>
    </div>
  );
};

export default FeaturedJobCart;
