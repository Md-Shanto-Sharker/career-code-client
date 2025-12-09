import React from "react";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router";
import { motion } from "motion/react";

const JobCard = ({ job }) => {
  const {
    title,
    _id,
    location,
    salaryRange,
    description,
    requirements,
    company,
    company_logo,
  } = job;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, boxShadow: "0 20px 35px rgba(0,0,0,0.15)" }}
      transition={{ type: "spring", stiffness: 120 }}
      className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center gap-4 p-4 border-b border-gray-200 bg-gray-50">
        <figure className="w-16 h-16 shrink-0 flex items-center justify-center bg-white rounded-xl shadow-sm">
          <img
            className="w-full h-full object-contain rounded-xl"
            src={company_logo}
            alt={`${company} logo`}
          />
        </figure>

        <div className="flex flex-col justify-center">
          <h1 className="text-lg font-bold text-gray-800">{company}</h1>
          <div className="flex gap-1 items-center text-gray-500 text-sm mt-1">
            <FiMapPin />
            <p>{location}</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <motion.span
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="px-3 py-1 text-xs font-semibold text-white rounded-full bg-linear-to-r from-purple-500 to-pink-500"
          >
            NEW
          </motion.span>
        </div>

        <p className="text-gray-700 font-medium">
          Salary:{" "}
          <span className="text-indigo-600 font-semibold">
            {salaryRange.min}-{salaryRange.max} {salaryRange.currency}
          </span>
        </p>

        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {requirements.map((req, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#3b82f6",
                color: "#fff",
              }}
              transition={{ type: "spring", stiffness: 120 }}
              className="px-3 py-1 border border-gray-300 rounded-full text-sm font-medium cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-200"
            >
              {req}
            </motion.div>
          ))}
        </div>

        <div className="mt-4 flex justify-end">
          <Link to={`jobs/${_id}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="btn bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg shadow-md transition-colors duration-200"
            >
              Details
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;
