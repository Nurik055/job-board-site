import "../Filter/Filter.css"

function Filter({ setSortBy, setFilter }) {
  return (
    <div className="sort-container">
      
      <select className="selectPrice" onChange={(e) => setSortBy(e.target.value)}>
        <option value="payingLowToHigh">Price Low → High</option>
        <option value="payingHighToLow">Price High → Low</option>
      </select>

      <div className="filtering">
        <button className="filteringButton" onClick={() => setFilter("all")}>All Jobs</button>
        <button className="filteringButton" onClick={() => setFilter("saved")}>Saved Jobs</button>
        <button className="filteringButton" onClick={() => setFilter("applied")}>Applied Jobs</button>
      </div>
    </div>
  );
}
export default Filter;
