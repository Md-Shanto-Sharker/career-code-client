import React from "react";
import { Link, useLoaderData } from "react-router";
import { motion } from "motion/react";

const JobDetails = () => {
  const {
    _id,
    title,
    company,
    location,
    salaryRange,
    description,
    requirements,
    company_logo,
  } = useLoaderData();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Job Header Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl border border-gray-200"
      >
        <motion.img
          whileHover={{ scale: 1.1 }}
          src={company_logo}
          alt={`${company} logo`}
          className="w-32 h-32 object-contain rounded-xl border border-gray-300 shadow-md"
        />

        <div className="flex-1 text-gray-900">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-2"
          >
            {title}
          </motion.h1>

          <p className="text-lg md:text-xl mb-1">
            Company: <span className="font-semibold">{company}</span>
          </p>
          <p className="mb-1">
            Location: <span className="font-semibold">{location}</span>
          </p>
          <p>
            Salary:{" "}
            <span className="font-semibold">
              {salaryRange.min}-{salaryRange.max} {salaryRange.currency}
            </span>
          </p>
        </div>
      </motion.div>

      {/* Job Description */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gray-50 rounded-3xl p-8 mt-8 shadow-md border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
          Job Description
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
      </motion.div>

      {/* Requirements */}
      {requirements && requirements.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-50 rounded-3xl p-8 mt-6 shadow-md border border-gray-200"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
            Requirements
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            {requirements.map((req, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.03, color: "#4f46e5" }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                {req}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Apply Button */}
      <div className="mt-10 flex justify-center">
        <Link to={`/jobApply/${_id}`}>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
            }}
            className="bg-indigo-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-transform duration-300"
          >
            Apply Now
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
