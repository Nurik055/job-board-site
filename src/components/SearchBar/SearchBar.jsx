import "../SearchBar/SearchBar.css";
import { Search } from "lucide-react";

function SearchBar({ setSearch }) {
  return (
    <div className="searchContainer">
      <Search className="icon" size={16} />
      <input
        className="searchInput"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
    </div>
  );
}
export default SearchBar;
