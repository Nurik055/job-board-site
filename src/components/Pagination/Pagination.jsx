import "../Pagination/Pagination.css"

function Pagination({ totalPages, currentPage, setCurrentPage }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="paginationContainer">
      {pages.map((page) => (
        <button className="paginationBtn" key={page} onClick={() => setCurrentPage(page)}>
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
