import React from "react";
import JobCategory from "../JobCategory/JobCategory";
import { useLoaderData } from "react-router-dom";
import FeaturedJobs from "../../FeaturedJobs/FeaturedJobs";

const Home = () => {
  const jobCategory = useLoaderData();
  const job = [
    {
      id: 1,
      name: "Software Engineer",
      img: "https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?w=740&t=st=1681060698~exp=1681061298~hmac=183b574ae4a85b17af5505b58846eba920d0f406f4d693c2363a858bcc562701",
      job_sit: "30 Jobs Available",
    },
    {
      id: 2,
      name: "Data Analyst",
      img: "https://img.freepik.com/free-vector/business-analysis-technology-concept-isometric-vector-illustration-process-working-with-big-database_1150-65531.jpg?w=826&t=st=1681060648~exp=1681061248~hmac=ab73856b309aa43016a0c7d8b4af7c69462df275f838197740428e2947738767",
      job_sit: "150 Jobs Available",
    },
    {
      id: 3,
      name: "Project Manager",
      img: "https://img.freepik.com/free-vector/project-management-concept-flat-style_23-2147796101.jpg?w=740&t=st=1681060583~exp=1681061183~hmac=5ab2f986fb01916ec9ed61d4e8c01be77ab89111aa23e766ccb394383c7f67f6",
      job_sit: "300+ Jobs Available",
    },
    {
      id: 4,
      name: "Web Developer",
      img: "https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=740&t=st=1681060485~exp=1681061085~hmac=0ce15e77b8ec9c05521ddac093d321e5d7b87b2cdfb43f532544ac46d9280368",
      job_sit: "400 Jobs Available",
    },
  ];
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
          {job.map((category) => (
            <JobCategory key={category.id} category={category}></JobCategory>
          ))}
        </div>
      </section>
      <div className="m-20">
        <FeaturedJobs jobCategory={jobCategory}></FeaturedJobs>
      </div>
    </div>
  );
};

export default Home;
