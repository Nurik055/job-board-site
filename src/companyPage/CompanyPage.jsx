import "../companyPage/CompanyPage.css";
import { useParams } from "react-router-dom";
import JobCard from "../../src/components/JobCard/JobCard";
function CompanyPage({ jobs, setSelectedJob }) {
  const { companyName } = useParams();

  const results = jobs.filter((job) => job.company === companyName);

  return (
    <div>
      <h1 className="companyName">{companyName}</h1>
      {results.map((result) => (
        <JobCard key={result.id} job={result} setSelectedJob={setSelectedJob} />
      ))}
    </div>
  );
}

export default CompanyPage;
