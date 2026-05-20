import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter";
import JobList from "../../components/JobList/JobList";
import Pagination from "../../components/Pagination/Pagination";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "../../../styles/global.css";
import BigCard from "../../components/BigCard/BigCard";

function Home() {
  const [sortBy, setSortBy] = useState("");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [jobs, setJobs] = useState([]);

useEffect(() => {
  fetch("https://remotive.com/api/remote-jobs")
    .then((res) => res.json())

    .then((data) => {
      const formatted = data.jobs.map((job) => ({
        id: job.id,

        title: job.title,

        company: job.company_name,

        location: job.candidate_required_location,

        url: job.url,

        description: job.description,

        salary: job.salary,

        tags: job.tags,
      }));

      setJobs(formatted);
    });
}, []);

  const { user } = useContext(AuthContext);

  let result = [...jobs];

  {
    /* sorting */
  }

  if (sortBy === "payingLowToHigh") {
    result.sort((a, b) => a.paying - b.paying);
  }
  if (sortBy === "payingHighToLow") {
    result.sort((a, b) => b.paying - a.paying);
  }

  {
    /* filtening*/
  }

  if (filter === "saved") {
    result = result.filter((job) => user.savedJobs.includes(job.id));
  }
  if (filter === "applied") {
    result = result.filter((job) => user.appliedJobs.includes(job.id));
  }

  {
    /*searching*/
  }

  result = result.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()),
  );

  {
    /* pagination */
  }

  const perPage = 5;
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const jobPerPage = result.slice(start, end);
  const totalPages = Math.ceil(result.length / perPage);

  {
    /* big job card */
  }

  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div>
      <SearchBar setSearch={setSearch}></SearchBar>
      <Filter setSortBy={setSortBy} setFilter={setFilter}></Filter>
      <JobList jobs={jobPerPage} setSelectedJob={setSelectedJob}></JobList>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      ></Pagination>
      {selectedJob && <BigCard selectedJob={selectedJob} />}
    </div>
  );
}

export default Home;
