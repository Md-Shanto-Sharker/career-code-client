import React, { Suspense } from "react";
import ApplicationStates from "./ApplicationStates";
import ApplicationList from "./ApplicationList";
import useAuth from "../../hooks/useAuth";
import { myApplicationsPromise } from "../../api/applicationsApi";


const MyApplications = () => {
  const { user } = useAuth();
  return (
    <div>
      <ApplicationStates></ApplicationStates>
      <Suspense
        fallback={<span className="loading loading-ring loading-xl"></span>}
      >
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
