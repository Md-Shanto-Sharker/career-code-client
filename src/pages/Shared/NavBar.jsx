import React, { useState, useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const NavBar = () => {
  const { user, SignOutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = () => {
    SignOutUser()
      .then(() => {
        Swal.fire({
          title: "<strong>Signed Out Successfully!</strong>",
          html: "You have been logged out from <b>JobPilot</b>",
          icon: "success",
          showConfirmButton: true,
          confirmButtonText: "Okay",
          timer: 2500,
          timerProgressBar: true,
          background: "#f0f4f8",
          color: "#1e293b",
          iconColor: "#22c55e",
          showClass: { popup: "animate__animated animate__zoomIn" },
          hideClass: { popup: "animate__animated animate__zoomOut" },
          customClass: {
            popup: "rounded-xl shadow-xl border border-gray-200",
            confirmButton:
              "bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600",
          },
        });
      })
      .catch((error) => alert("Error Signing Out", error.message));
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-base font-medium text-primary underline"
              : "text-base font-medium"
          }
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>
      </li>

      {user && (
        <li>
          <NavLink
            to="/myApplications"
            className={({ isActive }) =>
              isActive
                ? "text-base font-medium text-primary underline"
                : "text-base font-medium"
            }
            onClick={() => setMenuOpen(false)}
          >
            My Applications
          </NavLink>
        </li>
      )}

      {user && (
        <>
          <li>
            <NavLink
              to="/addJob"
              className={({ isActive }) =>
                isActive
                  ? "text-base font-medium text-primary underline"
                  : "text-base font-medium"
              }
              onClick={() => setMenuOpen(false)}
            >
              Add Job
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myPostedJobs"
              className={({ isActive }) =>
                isActive
                  ? "text-base font-medium text-primary underline"
                  : "text-base font-medium"
              }
              onClick={() => setMenuOpen(false)}
            >
              My Posted Jobs
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
        {/* LEFT - Logo */}
        <div className="flex items-center gap-2">
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9073/9073158.png"
              alt="logo"
              className="w-8 h-8 sm:w-9 sm:h-9"
            />
            <span className="text-xl sm:text-2xl font-bold text-primary tracking-wide">
              JobPilot
            </span>
          </NavLink>
        </div>

        {/* CENTER - Desktop Menu */}
        <div className="hidden md:flex md:items-center md:gap-4 lg:gap-6">
          <ul className="flex gap-2 lg:gap-4">{links}</ul>
        </div>

        {/* RIGHT - Auth Buttons & Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          {user ? (
            <button
              onClick={handleSignOut}
              className="btn btn-error btn-sm sm:btn-md text-white"
            >
              Sign Out
            </button>
          ) : (
            <>
              <NavLink className="btn btn-primary btn-sm sm:btn-md text-white" to="/register">
                Register
              </NavLink>
              <NavLink className="btn btn-outline btn-sm sm:btn-md" to="/signin">
                Sign In
              </NavLink>
            </>
          )}

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 inline-block text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-b border-gray-200 rounded-b-lg">
          <ul className="flex flex-col gap-2 p-4">{links}</ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
