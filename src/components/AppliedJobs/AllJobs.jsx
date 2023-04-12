import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { getJobCart } from '../Fakedb/Fakedb';
import { key } from 'localforage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faDollar, faLocation } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const AllJobs = () => {

	const [jobs, setJobs] = useState([]);
	const [savedCart, setSaveCart] = useState([]);
	useEffect(() => {
		fetch("JobCategory.json")
		.then((res) => res.json())
		.then((data) => setJobs(data));
	},[]);

	useEffect(()=>{
		const storedCart = getJobCart();
		const savedCart = [];

		for(const id in storedCart){
			console.log(id)
			const savedJob = jobs.find((job) => job.id == id);
			if(savedJob){
				const quantity = storedCart[id];
			savedJob.quantity = quantity;
			savedCart.push(savedJob)
			}
		}
		setSaveCart(savedCart);
	},[jobs])


	return (
		<div>
			{
				savedCart.map((j) => (
					
					<div className='border-[1px] p-5 rounded ml-20 mr-20 mt-10 mb-10 flex items-center justify-between'>
						<div className='flex'>
								<div className='p-10 w-96'>
									<img src={j.companyLogo} alt="" />
									
								</div>
							<div>
								<h1 className='mt-8 mb-3 text-xl font-bold text-[#474747'>{j.jobTitle}</h1>
								<p className='text-[#757575]'>{j.companyName}</p>

								<div className="flex mt-3">
									<button
									type="button"
									className="focus:outline-none border  border-indigo-600 bg-indigo-50 text-black  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
									>
									{j.remoteOrOnsite}
									</button>
									<button
									type="button"
									className="focus:outline-none text-black font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 border  border-indigo-600 bg-indigo-50"
									>
									{j.fulltimeOrPartTime}
									</button>
								</div>

								<div className="flex gap-10">
									<p><FontAwesomeIcon icon={faLocation} />{j.location}</p>
									<p><FontAwesomeIcon icon={faDollar} />Salary: {j.salary}</p>
								</div>
							</div>
						</div>
						<Link to={`/details/${j.id}`}>
							<button
							type="button"
							className="focus:outline-none text-white bg-indigo-500 hover:bg-indigo-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
							>
							view details
							</button>
						</Link>

					</div>
					
				))
			}
		</div>
	);
};

export default AllJobs;