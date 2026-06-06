import "../companyPage/CompanyPage.css";
import { useParams } from "react-router";

function CompanyPage() {
  const { companyName } = useParams();

  return (
    <div>
      <h1>{companyName}</h1>
    </div>
  );
}

export default CompanyPage;
