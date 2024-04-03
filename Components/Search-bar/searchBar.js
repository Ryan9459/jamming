import React from "react";
import { useState } from "react";

const SearchBar = () => {
const [searchInput , setSearchInput] = useState("")
const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);

};


    return (
        <>
       
        <input />
        
        <button />
        
        </>
    )
}