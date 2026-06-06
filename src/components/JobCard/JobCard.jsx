import "../../components/JobCard/JobCard.css";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { MapPin, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

function JobCard({ job, setSelectedJob, onRemove, filter }) {
  const { saveJob, applyToJob } = useContext(AuthContext);
  const navigate = useNavigate();
  
  return (
    <div className="jobCard" onClick={() => setSelectedJob(job)}>
      <img
        className="jobLogo"
        src={job.logo}
        alt={job.company}
        onClick={() => navigate("/companypage/" + job.company)}
      />
      <h1 className="h1Title">{job.title}</h1>
      <h2 className="h2Salary">{job.salaryRaw}</h2>
      <p className="pCompany" > 
        <Briefcase size={16}></Briefcase>
        {job.company}
      </p>

      <p className="pLocation">
        <MapPin size={16}></MapPin>
        {job.location}
      </p>
      <p className="pURL">{job.url}</p>

      <button
        className="buttonSave"
        onClick={(e) => {
          e.stopPropagation();
          saveJob(job.id);
        }}
      >
        Save
      </button>
      <button
        className="buttonApply"
        onClick={(e) => {
          e.stopPropagation();
          applyToJob(job.id);
        }}
      >
        Apply
      </button>

      {(filter === "saved" || filter === "applied") && (
        <button
          className="buttonRemove"
          onClick={(e) => {
            e.stopPropagation();
            onRemove(job.id);
          }}
        >
          Remove
        </button>
      )}
    </div>
  );
}

export default JobCard;
