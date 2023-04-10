import { data } from "autoprefixer";
import { parse } from "postcss";
import { useEffect, useState } from "react";

import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const [details, setDetails] = useState([]);
  const [jobs, setJobs] = useState([])

    const dynamic = useParams()
    const dynamicId = dynamic.userId

console.log(dynamicId)
  useEffect(() => {
    fetch('/FeaturedJob.json')
      .then((res) => res.json())
      .then((data) => setDetails(data));
    
  }, []);

  console.log(details)

  useEffect(()=>{
    const detailsData = details.find(job => job.id === dynamicId)
    setJobs(detailsData)
  } ,[])

  console.log(jobs)
  
  return (
    <div>
      <h1>this is details</h1>
    </div>
  );
};

export default Details;
