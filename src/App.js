import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import CapsuleList from './CapsuleList';
import { CapsuleProvider } from './Context/CapsuleContext';
import Navbar from './Navbar';

const App = () => {
  const [allCapsules, setAllCapsules] = useState([]);
  const [filteredCapsules, setFiltered] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.spacexdata.com/v4/capsules');
        setAllCapsules(response.data);
        setFiltered(response.data);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, []);

  const applyFilters = (filters) => {
    const filteredData = allCapsules.filter((capsule) => {
      const statusMatch = capsule.status.toLowerCase().includes(filters.status.toLowerCase());
      const typeMatch = capsule.type.toLowerCase().includes(filters.type.toLowerCase());
      return statusMatch && typeMatch;
    });

    setFiltered(filteredData);
  };

  return (
    <CapsuleProvider>
      <div className="w-screen">
        <Navbar />
        <SearchForm onSearch={applyFilters} />
        <CapsuleList capsules={filteredCapsules} />
      </div>
    </CapsuleProvider>
  );
};

export default React.memo(App);
