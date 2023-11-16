import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CapsuleList from './CapsuleList';

// Mock the CapsuleDetails component
jest.mock('./CapsuleDetails', () => ({ onClose, capsule }) => (
  <div>
    <p>Mock CapsuleDetails Component</p>
    <button onClick={onClose}>Close</button>
    <p>Capsule Serial: {capsule.serial}</p>
  </div>
));

// Mock the useCapsuleContext hook
jest.mock('./Context/CapsuleContext', () => ({
  useCapsuleContext: jest.fn(() => ({
    filteredData: {
      capsules: [
        { serial: '123', status: 'active', last_update: '2023-01-01' },
        { serial: '456', status: 'inactive', last_update: '2023-01-02' },
        // Add more mock data as needed
      ],
    },
  })),
}));

describe('CapsuleList Component', () => {
  it('handles capsule click and pop-up', () => {
    render(<CapsuleList />);

   
  });
});
