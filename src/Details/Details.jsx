import { data } from "autoprefixer";
import { parse } from "postcss";
import { useEffect, useState } from "react";

import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
//   const [details, setDetails] = useState([]);
//   const [jobs, setJobs] = useState([])

//     let dynamic = useParams()
//     let dynamicId = dynamic.userId

// console.log(dynamicId)
//   useEffect(() => {
//     fetch('/FeaturedJob.json')
//       .then((res) => res.json())
//       .then((data) => setDetails(data));
    

//       const detailsData = details?.filter(job => job.id === dynamicId)
//     setJobs(detailsData)
//   }, []);

  

 

//   console.log(jobs)


const job = useLoaderData();
console.log(job)
  
  return (
    <div>
      <h1>this is details</h1>
    </div>
  );
};

export default Details;
