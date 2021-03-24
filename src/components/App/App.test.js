import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders title", () => {
  render(<App />);
  const linkElement = screen.getByText("The Most Famous Game in the World");
  expect(linkElement).toBeInTheDocument();
});
