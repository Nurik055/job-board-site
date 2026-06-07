import "../companyPage/CompanyPage.css";
import { useParams } from "react-router-dom";

function CompanyPage({jobs}) {
  const { companyName } = useParams();

  const result = jobs.filter((job)=>job.company === companyName)
  return (
    <div>
      <h1>{companyName}</h1>
      result
    </div>
  );
}

export default CompanyPage;
