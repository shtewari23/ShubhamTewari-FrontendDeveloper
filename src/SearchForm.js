// components/SearchForm.js
import React, { useState } from "react";
import { useCapsuleContext } from "./Context/CapsuleContext";
import "./SearchForm.css";
import Search from "./images/Search.png";
const SearchForm = ({ onSearch }) => {
  const { filteredData, setFilteredCapsules } = useCapsuleContext();
  const [filters, setFilters] = useState({
    status: "",
    original_launch: "",
    type: "",
  });
  
//On changing the input 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };
//On submiting 
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
    setFilteredCapsules(filteredData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex items-center border-x-white border-2  justify-center bg-slate-950  ml-0 mt-2 h-16 "
    >
      <input
        type="text"
        id="status"
        name="status"
        value={filters.status}
        onChange={handleChange}
        className="w-20 lg:w-1/3 xl:w-56 text-zinc-400 border-2 p-2 rounded-3xl text-center  border-gray-400 bg-transparent transition-all duration-300  mr-2 bg-link-hover"
        placeholder="Status"
      />

      <input
        type="text"
        id="type"
        name="type"
        value={filters.type}
        onChange={handleChange}
        className="w-20 lg:w-1/3 xl:w-56 text-zinc-400 border-2  text-center p-2 rounded-3xl  bg-transparent border-gray-400 transition-all duration-300  mr-2  bg-link-hover"
        placeholder="Type"
      />
      <input
        type="text"
        id="original_launch"
        name="original_launch"
        value={filters.original_launch}
        onChange={handleChange}
        className=" w-20 lg:w-1/3 xl:w-56 text-zinc-400 border-2 p-2 rounded-3xl text-center border-gray-400 bg-transparent transition-all duration-300 mr-2 bg-link-hover"
        placeholder="Launch"
      />
      <button type="submit" className=" text-white-500  p-2 rounded">
        <img src={Search} class="h-10 w-10" />{" "}
      </button>
    </form>
  );
};

export default  React.memo(SearchForm);
