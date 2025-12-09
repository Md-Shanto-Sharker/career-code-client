import Lottie from "lottie-react";
import React, { use } from "react";
import registerLottie from "../../assets/lotties/Register.json";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import SocialLogin from "../Shared/SocialLogin";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // create user
    createUser(email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        Swal.fire({
          title: "<strong>Welcome!</strong>",
          html: `<p>Account created successfully for <b>${email}</b></p>`,
          icon: "success",
          confirmButtonText: "Go to Sign In",
          timer: 2500,
          timerProgressBar: true,
          background: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
          color: "#ffffff",
          iconColor: "#ffd700",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          customClass: {
            popup: "rounded-3xl shadow-2xl border border-white/20",
            confirmButton:
              "bg-yellow-400 text-gray-900 px-6 py-2 rounded-xl font-semibold hover:bg-yellow-500",
          },
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Oops!",
          text: `Registration Failed: ${error.message}`,
          icon: "error",
          confirmButtonText: "Try Again",
          background: "#fff1f2",
          color: "#b91c1c",
          iconColor: "#dc2626",
          customClass: {
            popup: "rounded-xl shadow-lg border border-red-200",
            confirmButton:
              "bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700",
          },
        });
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center relative bg-linear-to-br from-purple-600 via-indigo-500 to-pink-500 p-4 overflow-hidden">
      {/* Blurred overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md"></div>

      <div className="relative z-10 flex flex-col lg:flex-row-reverse items-center gap-8 w-full max-w-6xl">
        {/* Lottie Animation */}
        <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
          <Lottie
            style={{ width: "100%", maxWidth: "400px" }}
            animationData={registerLottie}
            loop={true}
          />
        </div>

        {/* Register Card */}
        <div className="w-full max-w-md bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Create Account
          </h1>

          <form onSubmit={handleRegister} className="space-y-5">
            <div className="flex flex-col">
              <label className="label text-white">Email</label>
              <input
                type="email"
                className="input input-bordered bg-white/10 text-white placeholder-white/70"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="label text-white">Password</label>
              <input
                type="password"
                name="password"
                className="input input-bordered bg-white/10 text-white placeholder-white/70"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="">
              <a className="link link-hover text-white/80 hover:text-white text-sm sm:text-base">
                Forgot password?
              </a>
            </div>

            <button className="btn btn-primary w-full mt-2 text-lg sm:text-xl">
              Register
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-6">
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
