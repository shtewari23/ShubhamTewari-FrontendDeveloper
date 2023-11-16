import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
const axios = require('axios');
import App from './App';

jest.mock('axios');

const mockData = [
  {
    // Your mock data structure
    // ...
  },
  // Add more mock data as needed
];

describe('App Component', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockData });
  });

  test('renders App component', async () => {
    render(<App />);
    // You can add assertions based on your component's behavior
    // For example, check if certain elements are present
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
    expect(screen.getByText(/Capsule List/i)).toBeInTheDocument();

    // Wait for the data to be fetched and rendered
    await waitFor(() => {
      expect(screen.getByText(/Your Capsule Component Text/i)).toBeInTheDocument();
    });
  });

  // Add more tests as needed
});
