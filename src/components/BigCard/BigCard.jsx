function BigCard({ selectedJob }) {
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
      <h1>{selectedJob.title}</h1>
      <h3>{selectedJob.company}</h3>
      <p>{selectedJob.location}</p>
      <p>{selectedJob.salary}</p>
      <p>{selectedJob.tags.join(", ")}</p>
      <p>{selectedJob.description}</p>
      <p>{selectedJob.url}</p>
    </div>
  );
}

export default BigCard;
