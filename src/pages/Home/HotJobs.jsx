import React, { use } from "react";
import JobCard from "../Shared/JobCard";
import { motion } from "motion/react";

const HotJobs = ({ jobPromise }) => {
  const jobs = use(jobPromise);

  return (
    <section className="py-16 bg-linear-to-b from-gray-50 via-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-12 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-blue-500 after:rounded-full after:mx-auto after:mt-3"
        >
          Hot Jobs of the Day
        </motion.h2>

        {/* Jobs Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {jobs.map((job) => (
            <motion.div
              key={job._id}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <JobCard job={job} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HotJobs;
