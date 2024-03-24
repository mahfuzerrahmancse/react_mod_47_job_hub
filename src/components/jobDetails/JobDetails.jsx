import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    // console.log(job);

    const handleApplyJob = () => {
        saveJobApplication(idInt);
        toast('you have applied toast successfully');
    }

    return (
      <div>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="border md:col-span-3 ">
            <h2 className="text-2xl">details coming here</h2>
            <p>{job.company_name}</p>
            <h2>job details of:{job.job_title}</h2>
          </div>
          <div className="border ">
            <h2 className="text-2xl">side things</h2>
            <button onClick={handleApplyJob} className="btn btn-primary w-full">apply now</button>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
};

export default JobDetails;