import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter";
import JobList from "../../components/JobList/JobList";
import Pagination from "../../components/Pagination/Pagination";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "../../../styles/global.css";
import BigCard from "../../components/BigCard/BigCard";

function Home({jobs}) {
  const [sortBy, setSortBy] = useState("");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);


  const { user } = useContext(AuthContext);

  let result = [...jobs];

  {
    /* sorting */
  }

  if (sortBy === "payingLowToHigh") {
    result.sort((a, b) => a.salary - b.salary);
  }
  if (sortBy === "payingHighToLow") {
    result.sort((a, b) => b.salary - a.salary);
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
