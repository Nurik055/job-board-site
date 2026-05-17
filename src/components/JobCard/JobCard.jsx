import "../../../styles/global.css";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

function JobCards({ job }) {
  const { saveJob, applyToJob } = useContext(AuthContext);

  return (
    <div className="jobCard">
      <h1>{job.title}</h1>
      <h3>{job.company}</h3>
      <p>{job.location}</p>
      <p>{job.url}</p>

      <button onClick={() => saveJob(job.id)}>Save</button>
      <button onClick={() => applyToJob(job.id)}>Apply</button>
    </div>
  );
}

export default JobCards;