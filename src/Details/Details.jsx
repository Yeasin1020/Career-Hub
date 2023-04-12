
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faDollar, faLocation, faMailBulk, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'



import { json, useLoaderData } from "react-router-dom";
import { useEffect, useState } from 'react';
import { stringify } from 'postcss';
import { addTOdb } from '../components/Fakedb/Fakedb';


const Details = () => {

const job = useLoaderData();
 const addToCart = (id) => {
  addTOdb(id)
 }


const {jobDescription, jobResponsibility, educationalRequirements, experiences, salary, jobTitle, contactInformation, location } = job
  
  return (
    <div className="flex m-10">
      <div className=" w-2/3 pl-5">
        <p><span className=" font-bold">Job Description:</span> {jobDescription}</p>
        <br />
        <p><span className=" font-bold">Job Responsibility:</span> {jobResponsibility}</p>
        <br />
        <p><span className=" font-bold">Educational Requirements:</span> <br /> <br />{educationalRequirements}</p>
        <p><span className=" font-bold">Experiences:</span><br /><br />{experiences}</p>
      </div>
      <div>
      <div className="border  border-indigo-600 bg-indigo-50 rounded-lg">
        <h1 className="pl-28 pr-28 pt-5 pb-5 font-extrabold">Job Details</h1>
        <hr />
        <div className="p-5">
          <p className=" font-medium mb-2"><span className=" font-bold">
            <span className=" text-indigo-700"><FontAwesomeIcon icon={faDollar} /></span>Salary:</span> {salary}</p>
          
          <p className=" font-medium"><span className=" font-bold">
            <span className=" text-indigo-700"><FontAwesomeIcon icon={faUser} /></span>Job:</span> {jobTitle}</p>
          <br />
          <p className="font-extrabold">Contact Information</p>
          <hr />
          <p className=" font-medium mb-3 mt-5"><span className=" font-bold">
            <span className=" text-indigo-700"><FontAwesomeIcon icon={faPhone} /></span>Phone:</span> {contactInformation.phone}</p>
          <p className=" font-medium mb-3">
            <span className=" font-bold"><span className=" text-indigo-700"><FontAwesomeIcon icon={faMailBulk} /></span>Email:</span> {contactInformation.email}</p>
          <p className=" font-medium mb-3">
            <span className=" font-bold"><span className=" text-indigo-700"><FontAwesomeIcon icon={faLocation} /></span>Address:</span> {location}</p>
        </div>
       
        
      </div>
     <div className="ml-3 mt-5">
      <button onClick={()=>addToCart(job.id)}
            type="button"
            className="focus:outline-none text-white bg-indigo-500 hover:bg-indigo-800  font-medium rounded-lg text-sm px-28 py-2.5 mr-2 mb-2"
          >
           Apply Now
          </button>
     </div>
      </div>
    </div>
  );
};

export default Details;
