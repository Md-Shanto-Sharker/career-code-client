import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import JobLists from "./JobLists";
import { jobsCreatedByPromise } from "../../api/JobsApi";

const MyPostedJobs = () => {
  const { user } = useAuth();
  return (
    <div className="p-6 md:p-10">
      {/* Page Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          My Posted Jobs
        </h2>
        <p className="text-gray-500 mt-1">
          Manage all the jobs you have created.
        </p>
      </div>

      {/* Content Box */}
      <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
        <Suspense
          fallback={
            <div className="flex justify-center py-10">
              <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
          }
        >
          <JobLists jobsCreatedByPromise={jobsCreatedByPromise(user.email)} />
        </Suspense>
      </div>
    </div>
  );
};

export default MyPostedJobs;
