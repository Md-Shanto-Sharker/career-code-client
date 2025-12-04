import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
// import HotJobs from "../pages/Home/HotJobs";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts></RootLayouts>,
    children: [
      { index: true, Component: Home },
      { path: "/register", Component: Register },
      { path: "/signin", Component: SignIn },
      {
        path: "/jobs/:id",
        loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`),
        Component: JobDetails,
      },
    ],
  },
]);
