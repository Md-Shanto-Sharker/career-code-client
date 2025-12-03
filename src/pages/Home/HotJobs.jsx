import React, { use } from "react";

const HotJobs = ({jobsPromise}) => {
    const jobs= use(jobsPromise)
    console.log(jobs);
    

  return (
    <div>
      {jobs.length}
      {jobs.map()}
    </div>
  );
};

export default HotJobs;
