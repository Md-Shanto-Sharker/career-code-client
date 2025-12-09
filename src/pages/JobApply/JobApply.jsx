import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { motion } from "motion/react";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const application = {
      jobId,
      applicant: user.email,
      linkedin,
      github,
      resume,
    };

    axios
      .post(
        "https://career-code-server-fawn.vercel.app/applications",
        application
      )
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "<strong>Application Submitted!</strong>",
            html: "Your application has been successfully sent. ✅",
            icon: "success",
            iconHtml: "🎯", // custom emoji/icon
            position: "top-end",
            showConfirmButton: true,
            confirmButtonText: "Awesome!",
            confirmButtonColor: "#4f46e5", // Indigo button
            background: "#f9fafb", // light background
            color: "#111827", // dark text
            timer: 2500,
            timerProgressBar: true,
            showClass: {
              popup: "animate__animated animate__fadeInDown animate__faster",
              icon: "animate__animated animate__tada",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp animate__faster",
            },
            customClass: {
              popup: "shadow-xl rounded-2xl border border-gray-200",
              title: "text-lg font-bold",
              content: "text-gray-700",
              confirmButton:
                "px-5 py-2 rounded-xl text-white font-semibold shadow-lg",
            },
          });

          form.reset();
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Try again later.",
        });
      });
  };

  return (
    <div className="max-w-3xl mx-auto my-12 p-6 bg-white rounded-2xl shadow-lg">
      <h3 className="text-3xl font-bold mb-4 text-gray-800 flex items-center gap-2">
        Apply for this Job:
        <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
          <Link
            to={`/jobs/${jobId}`}
            className="relative text-indigo-600 font-medium text-2xl group"
          >
            Details
            {/* Underline animation */}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
          </Link>
        </motion.div>
      </h3>
      <p className="text-gray-600 mb-6">
        Fill out the form below with your professional links and resume to apply
        for this position.
      </p>

      <form onSubmit={handleApplyFormSubmit} className="flex flex-col gap-5">
        {/* LinkedIn */}
        <motion.div whileFocus={{ scale: 1.02 }} className="flex flex-col">
          <label htmlFor="linkedin" className="text-gray-700 font-medium mb-1">
            LinkedIn Profile
          </label>
          <input
            type="url"
            name="linkedin"
            id="linkedin"
            placeholder="https://www.linkedin.com/in/yourprofile"
            className="input input-bordered w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm transition"
            required
          />
        </motion.div>

        {/* Github */}
        <motion.div whileFocus={{ scale: 1.02 }} className="flex flex-col">
          <label htmlFor="github" className="text-gray-700 font-medium mb-1">
            GitHub Profile
          </label>
          <input
            type="url"
            name="github"
            id="github"
            placeholder="https://github.com/yourprofile"
            className="input input-bordered w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm transition"
            required
          />
        </motion.div>

        {/* Resume */}
        <motion.div whileFocus={{ scale: 1.02 }} className="flex flex-col">
          <label htmlFor="resume" className="text-gray-700 font-medium mb-1">
            Resume Link
          </label>
          <input
            type="url"
            name="resume"
            id="resume"
            placeholder="Link to your resume"
            className="input input-bordered w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm transition"
            required
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-full shadow-lg transition-all duration-300"
          >
            Submit Application
          </button>
        </motion.div>
      </form>
    </div>
  );
};

export default JobApply;
