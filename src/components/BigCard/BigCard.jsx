import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

function BigCard({ selectedJob, setSelectedJob }) {
  const { saveJob, applyToJob } = useContext(AuthContext);
  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: "400px",
        height: "100vh",
        background: "white",
        overflow: "auto",
        borderLeft: "1px solid #ccc",
        padding: 20,
        zIndex: 1000,
      }}
    >
      <button onClick={()=> setSelectedJob(null)}>Close</button>
      <h1>{selectedJob.title}</h1>
      <h3>Company: {selectedJob.company}</h3>
      <p>Location: {selectedJob.location}</p>
      <p>Salary: {selectedJob.salary}</p>
      <p>Tags: {selectedJob.tags?.join(", ")}</p>
      <p>URL:{selectedJob.url}</p>
      <button onClick={() => saveJob(selectedJob.id)}>Save</button>
      <button onClick={() => applyToJob(selectedJob.id)}>Apply</button>{" "}
      <div dangerouslySetInnerHTML={{ __html: selectedJob.description }} />
      
    </div>
  );
}

export default BigCard;
