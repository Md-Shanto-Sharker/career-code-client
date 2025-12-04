import React from "react";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router";

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
    <div className="card bg-base-100  shadow-sm">
      <div className="flex  gap-3">
        <figure>
          <img className="w-16" src={company_logo} />
        </figure>

        <div>
          <h1 className="text-3xl">{company}</h1>
          <div className="flex gap-2 items-center">
            <FiMapPin />
            <p>{location}</p>
          </div>
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          Salary :{salaryRange.min}-{salaryRange.max}
          {salaryRange.currency}
        </p>
        <p>{description}</p>
        <div className="card-actions">
          {requirements.map((req, index) => (
            <div key={index} className="badge badge-outline">
              {req}
            </div>
          ))}

          {/* <div className="badge badge-outline">Products</div> */}
        </div>
        <div className="card-actions justify-end">
          <Link to={`jobs/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
