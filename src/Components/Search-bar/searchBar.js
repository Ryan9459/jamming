import React, { useCallback } from "react";
import { useCallback } from "react";

const SearchBar = (props) => {
const [searchInput , setSearchInput] = useState("")


const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);

};

const search = useCallback(() => {
    props.onSearch(searchInput);
}, [props.onSearch, searchInput]);

    return (
        <div>
       
        <input 
         type="text"
         placeHolder="Enter song name or artist"
         onChange={handleChange}
         value={searchInput}
        />

        
        <button className="searchBar" onClick={search}>
            SEARCH
        </button>
        
        </div>
    )
}

export default SearchBar;