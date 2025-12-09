import React, { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 mt-8">
      <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
        Jobs Applied so far:{" "}
        <span className="text-purple-400">{applications.length}</span>
      </h3>

      <div className="overflow-x-auto rounded-2xl shadow-xl border border-white/20 bg-white/10 backdrop-blur-lg">
        <table className="min-w-full divide-y divide-white/20">
          <thead className="bg-linear-to-r from-purple-600 to-pink-500 text-white">
            <tr>
              <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wider">
                #
              </th>
              <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Job
              </th>
              <th className="px-4 sm:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Favorite Color
              </th>
              <th className="px-4 sm:px-6 py-2 sm:py-3 text-right text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/20">
            {applications.map((application, index) => (
              <JobApplicationRow
                key={application._id}
                index={index}
                application={application}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
