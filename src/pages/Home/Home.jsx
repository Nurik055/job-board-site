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

  const { user, removeSavedJob, removeAppliedJob } = useContext(AuthContext);
  let result = [...jobs];

  {
    /* big job card */
  }

  const [selectedJob, setSelectedJob] = useState(null);

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

  {
    /* the x jobs text */
  }
  let textP = "";

  if (search !== "") {
    textP = `${result.length} results found`;
  } else if (filter === "saved") {
    textP = `${result.length} saved jobs`;
  } else if (filter === "applied") {
    textP = `${result.length} applied jobs`;
  } else {
    textP = `${jobs.length} jobs available`;
  }

  {
    /* removing jobs */
  }
  let onRemove = () => {};

  if (filter === "saved") {
    onRemove = removeSavedJob;
  }

  if (filter === "applied") {
    onRemove = removeAppliedJob;
  }

  return (
    <div className="container">
      <SearchBar setSearch={setSearch}></SearchBar>
      <Filter
        setSortBy={setSortBy}
        setFilter={setFilter}
        setJobType={setJobType}
      ></Filter>

      <p className="homeP">{textP}</p>

      {result.length === 0 ? (
        <p>no jobs found</p>
      ) : (
        <JobList
          jobs={jobPerPage}
          setSelectedJob={setSelectedJob}
          onRemove={onRemove}
        />
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
