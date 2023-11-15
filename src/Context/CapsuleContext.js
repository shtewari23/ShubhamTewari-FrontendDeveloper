// Context/CapsuleContext.js
import React, { createContext, useContext, useState } from 'react';

const CapsuleContext = createContext();

const CapsuleProvider = ({ children }) => {
  const [allCapsules, setAllCapsules] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const setFilteredCapsules = (data) => {
    setFilteredData(data);
  };

  return (
    <CapsuleContext.Provider value={{ allCapsules, filteredData, setFilteredCapsules }}>
      {children}
    </CapsuleContext.Provider>
  );
};

const useCapsuleContext = () => {
  const context = useContext(CapsuleContext);
  if (!context) {
    throw new Error('useCapsuleContext must be used within a CapsuleProvider');
  }
  return context;
};

export { CapsuleProvider, useCapsuleContext };
