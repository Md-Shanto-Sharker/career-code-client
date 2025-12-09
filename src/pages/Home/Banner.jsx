import React from "react";
import { motion } from "motion/react";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";

const Banner = () => {
  return (
    <section className="relative bg-linear-to-br from-purple-600 via-indigo-500 to-pink-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24 flex flex-col lg:flex-row items-center lg:justify-between gap-10 lg:gap-20">
        {/* Images */}
        <div className="flex-1 flex flex-col items-center lg:items-end gap-6">
          <motion.img
            src={team1}
            animate={{
              y: [0, 20, 0],
              transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="w-64 sm:w-72 md:w-80 lg:w-96 border-4 border-blue-500 rounded-t-[40px] rounded-br-[40px] shadow-2xl object-cover"
          />
          <motion.img
            src={team2}
            animate={{
              x: [0, 15, 0],
              transition: {
                duration: 6,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="w-64 sm:w-72 md:w-80 lg:w-96 border-4 border-blue-500 rounded-t-[40px] rounded-br-[40px] shadow-2xl object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Animated Heading */}
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-snug"
          >
            Remote{" "}
            <motion.span
              animate={{
                color: ["#ff5733", "#33ff33", "#8a33ff", "#ffeb3b"],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                },
              }}
            >
              Jobs
            </motion.span>{" "}
            For You!
          </motion.h1>

          {/* Paragraph Animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="text-white/90 text-sm sm:text-base md:text-lg mb-6 drop-shadow-lg"
          >
            Discover the latest remote jobs that match your skills and
            lifestyle.{" "}
            <span className="text-yellow-300 font-semibold">
              Apply effortlessly
            </span>{" "}
            and work from anywhere in the world with our curated job listings.
          </motion.p>

          {/* Animated Button */}
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2.5, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary btn-lg sm:btn-md text-white px-8 py-3 rounded-xl shadow-lg transition-transform duration-300"
          >
            Get Started
          </motion.button>
        </div>
      </div>

      {/* Optional background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    </section>
  );
};

export default Banner;
