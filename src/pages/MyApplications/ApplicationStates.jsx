import React from "react";

const ApplicationStates = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      {/* Card 1 */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-2xl shadow-xl p-6 flex items-center gap-4">
        <div className="p-4 bg-white/20 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-8 w-8 stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium">Total Likes</p>
          <p className="text-2xl font-bold">25.6K</p>
          <p className="text-xs opacity-70 mt-1">21% more than last month</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-gradient-to-r from-green-500 to-teal-400 text-white rounded-2xl shadow-xl p-6 flex items-center gap-4">
        <div className="p-4 bg-white/20 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-8 w-8 stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium">Page Views</p>
          <p className="text-2xl font-bold">2.6M</p>
          <p className="text-xs opacity-70 mt-1">21% more than last month</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-2xl shadow-xl p-6 flex items-center gap-4">
        <div className="avatar">
          <div className="w-16 rounded-full border-2 border-white">
            <img src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp" alt="profile" />
          </div>
        </div>
        <div>
          <p className="text-sm font-medium">Tasks Done</p>
          <p className="text-2xl font-bold">86%</p>
          <p className="text-xs opacity-70 mt-1">31 tasks remaining</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationStates;
