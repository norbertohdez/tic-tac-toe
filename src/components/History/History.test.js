import { render, screen } from "@testing-library/react";
import History from "./History";

test("renders 3 items", () => {
  const scoreHistory = {
    "❎": 0,
    "🌀": 0,
    "NO ONE": 0,
  };
  render(<History currHistory={scoreHistory} />);
  const listItems = screen.getAllByText(/: 0/i);
  expect(listItems.length).toBe(3);
});

test("renders an item with count 1", () => {
  const scoreHistory = {
    "❎": 0,
    "🌀": 1,
    "NO ONE": 0,
  };
  render(<History currHistory={scoreHistory} />);
  const listItems = screen.getAllByText(/: 1/i);
  expect(listItems.length).toBe(1);
});
