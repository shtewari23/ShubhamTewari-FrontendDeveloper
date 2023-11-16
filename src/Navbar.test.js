import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  it('toggles menu and closes it when a link is clicked', () => {
    render(<Navbar />);

    // Check if the menu is initially closed
    expect(screen.queryByTestId('menu-dropdown')).not.toBeInTheDocument();

    // Click the menu button to open the menu
    fireEvent.click(screen.getByText('Menu'));

    // Check if the menu is now open
    expect(screen.getByTestId('menu-dropdown')).toBeInTheDocument();

    // Click a link in the menu
    fireEvent.click(screen.getByText('Capsules'));

    // Check if the menu is closed after clicking a link
    expect(screen.queryByTestId('menu-dropdown')).not.toBeInTheDocument();
  });

  it('displays countdown correctly', () => {
    render(<Navbar />);

    // Check if the countdown is initially displayed
    expect(screen.getByText(/DAYS/)).toBeInTheDocument();

    // You can add more specific checks for countdown rendering as needed
  });
});
