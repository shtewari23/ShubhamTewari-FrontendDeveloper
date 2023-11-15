import React from 'react';

const CapsuleDetails = ({ onClose, capsule }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-4 rounded h-3/4 w-auto">
        <p>Capsule Serial: {capsule.serial}</p>
        <p>Capsule Status: {capsule.status}</p>
        <p>Last Update: {capsule.last_update}</p>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white p-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default CapsuleDetails;
