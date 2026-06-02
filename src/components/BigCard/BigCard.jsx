import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import "../BigCard/BigCard.css"

function BigCard({ selectedJob, setSelectedJob }) {
  const { saveJob, applyToJob } = useContext(AuthContext);
  return (
    <div className="bigContainer">
      <button className="bigJobClose" onClick={()=> setSelectedJob(null)}>x</button>
      <h1 className="bigTitle">{selectedJob.title}</h1>
      <h3 className="bigCompany">Company: {selectedJob.company}</h3>
      <p className="bigLocation">Location: {selectedJob.location}</p>
      <p className="bigSalary">Salary: {selectedJob.salary}</p>
      <p className="bigTags">Tags: {selectedJob.tags?.join(", ")}</p>
      <p className="bigUrl">URL:{selectedJob.url}</p>
      <button className="bigSaveBtn" onClick={() => saveJob(selectedJob.id)}>Save</button>
      <button className="bigApplyBtn" onClick={() => applyToJob(selectedJob.id)}>Apply</button>{" "}
      <div className="bigDescription" dangerouslySetInnerHTML={{ __html: selectedJob.description }} />
      
    </div>
  );
}

export default BigCard;
