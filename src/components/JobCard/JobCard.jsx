  import "../../components/JobCard/JobCard.css";
  import { AuthContext } from "../../context/AuthContext";
  import { useContext } from "react";
  import { MapPin, Briefcase } from "lucide-react";

  function JobCard({ job, setSelectedJob }) {
    const { saveJob, applyToJob } = useContext(AuthContext);

    return (
      <div className="jobCard" onClick={() => setSelectedJob(job)}>
        <img className="jobLogo" src={job.logo} alt={job.company} />
        <h1 className="h1Title">{job.title}</h1>
        <h2 className="h2Salary">{job.salaryRaw}</h2>
        <p className="pCompany"><Briefcase size={16} ></Briefcase>{job.company}</p>
        <p className="pLocation"><MapPin size={16}></MapPin>{job.location}</p>
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
        
      </div>
    );
    
  }

  export default JobCard;
