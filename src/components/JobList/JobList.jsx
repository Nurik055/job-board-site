import JobCard from "../JobCard/JobCard";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "../../../styles/global.css";

function JobList({ jobs, setSelectedJob, onRemove }) {
  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} setSelectedJob={setSelectedJob} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default JobList;
