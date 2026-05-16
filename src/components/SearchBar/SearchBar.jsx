function SearchBar({setSearch}) {
    
    return(
        
        <div>
            <input onChange={(e)=>setSearch(e.target.value)} placeholder="Search" />
        </div>
    )
}
export default SearchBar