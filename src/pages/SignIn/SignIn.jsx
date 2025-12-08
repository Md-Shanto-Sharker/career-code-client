import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import Lottie from "lottie-react";
import signInLottie from "../../assets/lotties/SignIn.json";
import { useLocation, useNavigate } from "react-router";
import SocialLogin from "../Shared/SocialLogin";
const SignIn = () => {
  const { SignInUser } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // SignIn user
    SignInUser(email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
       <div className="min-h-screen flex items-center justify-center relative bg-linear-to-br from-purple-700 via-indigo-600 to-pink-500 overflow-hidden p-4">
      {/* Blurred background overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>

      <div className="relative z-10 flex flex-col lg:flex-row-reverse items-center gap-8 w-full max-w-6xl">
        {/* Lottie Animation */}
        <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
          <Lottie
            style={{ width: "100%", maxWidth: "600px" }}
            animationData={signInLottie}
            loop={true}
          />
        </div>

        {/* Sign In Card */}
        <div className="w-full max-w-md bg-white/20 backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Sign In Now!
          </h1>

          <form onSubmit={handleSignIn} className="space-y-5">
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
                className="input input-bordered bg-white/10 text-white placeholder-white/70"
                name="password"
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
              Sign In
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-6">
            <SocialLogin from={from} />
          </div>
        </div>
      </div>
    </div>
  );
};
  

export default SignIn;
