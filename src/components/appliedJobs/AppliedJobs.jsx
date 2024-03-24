import  { useEffect, useState } from "react";
import { getStoredJobApplication } from "../../utility/localStorage";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = filter => {
    if (filter === 'all'){
      setDisplayJobs(appliedJobs);
    }
    else if (filter === 'remote'){
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    }
    else if (filter === 'onsite'){
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  }

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();

    // Example fetch call, replace with your actual fetch logic
    fetch("../jobs.json")
      .then((response) => response.json())
      .then((data) => {
        const jobsApplied = data.filter((job) => storedJobIds.includes(job.id));
        setAppliedJobs(jobsApplied);
        setDisplayJobs(jobsApplied);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h3 className="text-2xl">Jobs I applied: {appliedJobs.length} </h3>

      <details className="dropdown">
        <summary className="m-1 btn">Open or Close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsFilter("all")}>
            {" "}
            <a>All</a>
          </li>
          <li onClick={() => handleJobsFilter("remote")}>
            {" "}
            <a>Remote</a>{" "}
          </li>
          <li onClick={() => handleJobsFilter("onsite")}>
            {" "}
            <a>Onsite</a>{" "}
          </li>
        </ul>
      </details>

      <ul>
        {displayJobs.map((job) => (
          <li key={job.id}>
            <span>
              {job.job_title} {job.company_name}: {job.remote_or_onsite}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;

