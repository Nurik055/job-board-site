function Filter({ setSortBy, setFilter }) {
  return (
    <div className="sort-container">
      <label>Sort By:</label>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="payingLowToHigh">Price Low → High</option>
        <option value="payingHighToLow">Price High → Low</option>
      </select>

      <div className="filtering">
        <button onClick={() => setFilter("all")}>All Jobs</button>
        <button onClick={() => setFilter("saved")}>Saved Jobs</button>
        <button onClick={() => setFilter("applied")}>Applied Jobs</button>
      </div>
    </div>
  );
}
export default Filter;
