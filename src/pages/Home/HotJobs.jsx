import React, { use } from "react";
import JobCard from "../Shared/JobCard";


const HotJobs = ({ jobPromise }) => {
  const jobs = use(jobPromise);
  console.log(jobs);
  return (
    <div>
      <h2 className="text-4xl text-center mb-8">Hot Jobs of the Day</h2>
      {jobs.length}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {jobs.map((job) => (
          <JobCard
           key={job._id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
