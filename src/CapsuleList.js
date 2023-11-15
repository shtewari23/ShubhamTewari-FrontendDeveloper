import React, { useEffect, useState } from 'react';
import { useCapsuleContext } from './Context/CapsuleContext';
import CapsuleDetails from './CapsuleDetails';

const CapsuleList = (filteredCapsules) => {
  const { filteredData } = useCapsuleContext();
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCapsule, setSelectedCapsule] = useState(null);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Extract the items for the current page
  const currentItems = filteredCapsules.capsules.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredCapsules.capsules.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCapsuleClick = (capsule) => {
    setSelectedCapsule(capsule);
  };

  const handleClosePopup = () => {
    setSelectedCapsule(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 p-3">
        {currentItems.map((capsule) => (
          <div
            key={capsule.serial}
            className="bg-[#000014] p-6 text-white rounded cursor-pointer mt-3 mr-3 h-46"
            onClick={() => handleCapsuleClick(capsule)}
          >
            <p class='tracking-[4px] text-gray-500'>Capsule Serial: 
            <span class ='tracking-[2px] text-white p-2'>{capsule.serial}</span></p>
            <p class='tracking-[4px] text-gray-500'>Capsule Status: <span class ='tracking-[2px] text-white  capitalize'> {capsule.status}</span></p>
            <p class ='tracking-[4px] text-gray-500'>Last Update:  <span class ='tracking-[2px] text-white '>{capsule.last_update}</span></p>
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-2 p-2 ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* CapsuleDetails pop-up */}
      {selectedCapsule && (
        <CapsuleDetails onClose={handleClosePopup} capsule={selectedCapsule} />
      )}
    </div>
  );
};

export default CapsuleList;
