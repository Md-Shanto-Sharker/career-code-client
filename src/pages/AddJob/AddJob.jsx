import React from "react";

const AddJob = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-[#4f46e5] via-[#7c3aed] to-[#ec4899] py-10 px-4">
      <form className="w-full max-w-3xl space-y-8 bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-white/20">
        
        <h2 className="text-4xl font-bold text-center mb-2 text-white">
          Add a New Job
        </h2>
        <p className="text-center text-sm opacity-90 text-white">
          Fill out the form below to post a new job
        </p>

        {/* Basic Info */}
        <fieldset className="fieldset bg-white/10 rounded-xl border border-white/30 p-6 shadow-md">
          <legend className="text-2xl font-semibold px-2 text-white">
            Basic Info
          </legend>

          <div className="space-y-3">
            <label className="label text-white">Job Title</label>
            <input
              type="text"
              name="title"
              className="input input-bordered w-full"
              placeholder="Job Title"
            />

            <label className="label text-white">Company</label>
            <input
              type="text"
              name="company"
              className="input input-bordered w-full"
              placeholder="Company Name"
            />

            <label className="label text-white">Location</label>
            <input
              type="text"
              name="location"
              className="input input-bordered w-full"
              placeholder="Company Location"
            />

            <label className="label text-white">Company Logo</label>
            <input
              type="text"
              name="company_logo"
              className="input input-bordered w-full"
              placeholder="Company Logo URL"
            />
          </div>
        </fieldset>

        {/* Job Type */}
        <fieldset className="fieldset bg-white/10 rounded-xl border border-white/30 p-6 shadow-md">
          <legend className="text-2xl font-semibold px-2 text-white">
            Job Type
          </legend>

          <div className="flex flex-wrap gap-3">
            <input className="btn btn-outline text-white" type="radio" name="jobType" aria-label="All" />
            <input className="btn btn-outline text-white" type="radio" name="jobType" aria-label="On-Site" />
            <input className="btn btn-outline text-white" type="radio" name="jobType" aria-label="Remote" />
            <input className="btn btn-outline text-white" type="radio" name="jobType" aria-label="Hybrid" />
          </div>
        </fieldset>

        {/* Category */}
        <fieldset className="fieldset bg-white/10 rounded-xl border border-white/30 p-6 shadow-md">
          <legend className="text-2xl font-semibold px-2 text-white">
            Job Category
          </legend>

          <select className="select select-bordered w-full" defaultValue="">
            <option value="" disabled>
              Select Category
            </option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>

        {/* Deadline */}
        <fieldset className="fieldset bg-white/10 rounded-xl border border-white/30 p-6 shadow-md">
          <legend className="text-2xl font-semibold px-2 text-white">
            Application Deadline
          </legend>
          <input type="date" name="deadline" className="input input-bordered w-full" />
        </fieldset>

        {/* Salary */}
        <fieldset className="fieldset bg-white/10 rounded-xl border border-white/30 p-6 shadow-md">
          <legend className="text-2xl font-semibold px-2 text-white">
            Salary Range
          </legend>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="label text-white">Minimum Salary</label>
              <input
                type="text"
                name="min"
                className="input input-bordered w-full"
                placeholder="Minimum Salary"
              />
            </div>

            <div>
              <label className="label text-white">Maximum Salary</label>
              <input
                type="text"
                name="max"
                className="input input-bordered w-full"
                placeholder="Maximum Salary"
              />
            </div>

            <div>
              <label className="label text-white">Currency</label>
              <select className="select select-bordered w-full" defaultValue="">
                <option value="" disabled>
                  Select Currency
                </option>
                <option>BDT</option>
                <option>USD</option>
                <option>EU</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* Description */}
        <fieldset className="fieldset bg-white/10 rounded-xl border border-white/30 p-6 shadow-md">
          <legend className="text-lg font-semibold px-2 text-white">
            Job Description
          </legend>
          <textarea className="textarea textarea-bordered w-full h-32" />
        </fieldset>

        {/* Requirements */}
        <fieldset className="fieldset bg-white/10 rounded-xl border border-white/30 p-6 shadow-md">
          <legend className="text-lg font-semibold px-2 text-white">
            Job Requirements
          </legend>
          <textarea className="textarea textarea-bordered w-full h-28" />
        </fieldset>

        {/* Responsibilities */}
        <fieldset className="fieldset bg-white/10 rounded-xl border border-white/30 p-6 shadow-md">
          <legend className="text-lg font-semibold px-2 text-white">
            Job Responsibilities
          </legend>
          <textarea className="textarea textarea-bordered w-full h-28" />
        </fieldset>

        {/* HR Info */}
        <fieldset className="fieldset bg-white/10 rounded-xl border border-white/30 p-6 shadow-md">
          <legend className="text-lg font-semibold px-2 text-white">
            HR Related Info
          </legend>

          <label className="label text-white">HR Name</label>
          <input type="text" className="input input-bordered w-full" />

          <label className="label text-white">HR Email</label>
          <input type="email" className="input input-bordered w-full" />
        </fieldset>

        <button
          type="submit"
          className="btn btn-primary w-full text-lg rounded-xl shadow-lg"
        >
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
