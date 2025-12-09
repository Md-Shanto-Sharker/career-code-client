import React, { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

const jobPromise = fetch(
  "https://career-code-server-fawn.vercel.app/jobs"
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Suspense fallback={"Loading hot Jobs"}>
        <HotJobs jobPromise={jobPromise}></HotJobs>
      </Suspense>
    </div>
  );
};

export default Home;
