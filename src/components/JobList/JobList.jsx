import JobCard from "../JobCard/JobCard";

import "../../../styles/global.css";

function JobList({ jobs, setSelectedJob }) {
  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} setSelectedJob={setSelectedJob} />
      ))}
    </div>
  );
}

export default JobList;
