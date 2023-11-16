// SearchForm.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "./SearchForm";

// Mock the context
jest.mock("./Context/CapsuleContext", () => ({
  useCapsuleContext: jest.fn(() => ({
    filteredData: [],
    setFilteredCapsules: jest.fn(),
  })),
}));

describe("SearchForm Component", () => {
  it("renders the SearchForm component correctly", () => {
    render(<SearchForm onSearch={() => {}} />);
    // Add your assertion checks here
    expect(screen.getByPlaceholderText("Status")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Type")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Launch")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("handles form submission correctly", () => {
    const onSearchMock = jest.fn();
    render(<SearchForm onSearch={onSearchMock} />);
    
    // Simulate user input
    fireEvent.change(screen.getByPlaceholderText("Status"), {
      target: { value: "someStatus" },
    });
    fireEvent.change(screen.getByPlaceholderText("Type"), {
      target: { value: "someType" },
    });
    fireEvent.change(screen.getByPlaceholderText("Launch"), {
      target: { value: "someLaunch" },
    });

    // Simulate form submission
    fireEvent.submit(screen.getByRole("form"));

    // Check if the onSearch function was called with the correct arguments
    expect(onSearchMock).toHaveBeenCalledWith({
      status: "someStatus",
      type: "someType",
      original_launch: "someLaunch",
    });
  });
});
