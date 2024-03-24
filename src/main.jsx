import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './components/roots/Root';
import Home from './components/homes/Home';
import AppliedJobs from './components/appliedJobs/AppliedJobs';
import ErrorPage from './components/errorPages/ErrorPage';
import JobDetails from './components/jobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
        
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("../jobs.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
