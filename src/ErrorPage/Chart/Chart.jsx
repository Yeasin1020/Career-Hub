import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Chart = () => {
	const marks = [
		{ id: 1, subject: "Assignment-1", marks: 60 },
		{ id: 2, subject: "Assignment-2", marks: 60 },
		{ id: 3, subject: "Assignment-3", marks: 60 },
		{ id: 4, subject: "Assignment-4", marks: 52 },
		{ id: 5, subject: "Assignment-5", marks: 60 },
		{ id: 6, subject: "Assignment-6", marks: 60 },
		{ id: 7, subject: "Assignment-7", marks: 55 },
	  ];
	
	return (
		<div className="ml-10 mb-10">
      <h2 className="text-2xl font-bold text-[#1A1919] text-center mt-20 mb-20">
        This is my assignment mark
      </h2>

      <AreaChart width={1000} height={400} data={marks}>
        <XAxis dataKey="subject" />
        <YAxis />
        <Tooltip dataKey="name"/>
        <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
	);
};

export default Chart;