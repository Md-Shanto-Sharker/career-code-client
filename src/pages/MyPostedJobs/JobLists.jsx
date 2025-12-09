import React, { use } from "react";

const JobLists = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);
  return (
    <div className="p-6 bg-base-200 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Jobs Created By You:{" "}
        <span className="text-primary">{jobs.length}</span>
      </h2>

      <div className="overflow-x-auto rounded-xl border border-base-300">
        <table className="table table-zebra">
          <thead className="bg-base-300 text-base font-semibold">
            <tr>
              <th>#</th>
              <th>Job Title</th>
              <th>Posted Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <td className="font-medium">{index + 1}</td>
                <td className="font-semibold text-primary">{job.title}</td>
                <td>10/12/2026</td>
                <td>
                  <span className="badge badge-success badge-outline">
                    Active
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobLists;
