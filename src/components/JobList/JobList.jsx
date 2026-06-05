import JobCard from "../JobCard/JobCard";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "../../../styles/global.css";

function JobList({ jobs, setSelectedJob, onRemove, filter  }) {
  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} setSelectedJob={setSelectedJob} onRemove={onRemove}  filter={filter} />
      ))}
    </div>
  );
}

export default JobList;
