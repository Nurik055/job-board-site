import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter";
import JobList from "../../components/JobList/JobList";
import Pagination from "../../components/Pagination/Pagination";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import "../../../styles/global.css";
import BigCard from "../../components/BigCard/BigCard";

function Home({ jobs, loading, error }) {
  const [sortBy, setSortBy] = useState("");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const { user } = useContext(AuthContext);
  let result = [...jobs];

  {
    /* big job card */
  }

  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    if (selectedJob) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedJob]);

  {
    /* sorting */
  }

  if (sortBy === "payingLowToHigh") {
    result.sort((a, b) => a.salaryMin - b.salaryMin);
  }
  if (sortBy === "payingHighToLow") {
    result.sort((a, b) => b.salaryMax - a.salaryMax);
  }

  {
    /* filtening*/
  }

  if (filter === "saved" && user) {
    result = result.filter((job) => user.savedJobs.includes(job.id));
  }
  if (filter === "applied" && user) {
    result = result.filter((job) => user.appliedJobs.includes(job.id));
  }

  {
    /* job type filter */
  }
  if (jobType !== "all") {
    result = result.filter((job) => job.jobType === jobType);
  }

  {
    /*searching*/
  }

  result = result.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, filter, sortBy]);

  {
    /* loading */
  }

  if (loading) {
    return <p>Loading jobs...</p>;
  }

  {
    /* error */
  }
  if (error) {
    return <p>{error}</p>;
  }

  {
    /* pagination */
  }
  const perPage = 5;
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const jobPerPage = result.slice(start, end);
  const totalPages = Math.ceil(result.length / perPage);

  return (
    <div className="container">
      <SearchBar setSearch={setSearch}></SearchBar>
      <Filter
        setSortBy={setSortBy}
        setFilter={setFilter}
        setJobType={setJobType}
      ></Filter>
      <p className="homeP">{jobs.length} jobs available</p>
      {result.length === 0 ? (
        <p>no jobs found</p>
      ) : (
        <JobList jobs={jobPerPage} setSelectedJob={setSelectedJob} />
      )}
      {result.length > 0 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      )}
      {selectedJob && (
        <BigCard selectedJob={selectedJob} setSelectedJob={setSelectedJob} />
      )}
      {/* if selected job exists */}
    </div>
  );
}

export default Home;
