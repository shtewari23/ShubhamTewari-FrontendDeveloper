// components/SearchForm.js
import React, { useState } from 'react';
import { useCapsuleContext } from './Context/CapsuleContext'
import './SearchForm.css'
const SearchForm = ({ onSearch }) => {
    const { filteredData,setFilteredCapsules } = useCapsuleContext();
    console.log(filteredData,"77")
  const [filters, setFilters] = useState({
    status: '',
    original_launch: '',
    type: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
    console.log(filters,"00")
    setFilteredCapsules(filteredData);
  };

  return (
    <form onSubmit={handleSubmit} className=" flex items-center border-x-white border-2  justify-center bg-slate-950  ml-0 mr-1 mt-2 h-16 ">
    <input
      type="text"
      id="status"
      name="status"
      value={filters.status}
      onChange={handleChange}
      className="text-zinc-400 border-2 p-2 rounded-3xl text-center  border-gray-400 bg-transparent transition-all duration-300  mr-2 bg-link-hover"            placeholder='Launch Status'
    />
  
    <input
      type="text"
      id="original_launch"
      name="original_launch"
      value={filters.original_launch}
      onChange={handleChange}
      className="text-zinc-400 border-2 p-2 rounded-3xl text-center border-gray-400 bg-transparent  transition-all duration-300 mr-2  bg-link-hover"      placeholder='Launch Type'
    />
    
        <input
          type="text"
          id="type"
          name="type"
          value={filters.type}
          onChange={handleChange}
          className="text-zinc-400 border-2  text-center p-2 rounded-3xl  bg-transparent border-gray-400 transition-all duration-300  mr-2  bg-link-hover"          placeholder='Reuse Count'

        />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
