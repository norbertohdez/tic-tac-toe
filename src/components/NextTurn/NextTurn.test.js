import { render, screen } from "@testing-library/react";
import NextTurn from "./NextTurn";

test("renders 'Who's next' in the initial state", () => {
  render(<NextTurn won={false} boardFull={false} currTurn={"🌀"} />);
  const nextTurnText = screen.getByText(/Who's next/i);
  expect(nextTurnText).toBeInTheDocument();
});

test("does render 'WINS' text when game finishes", () => {
  render(<NextTurn won={true} boardFull={true} currTurn={"🌀"} />);
  const winsText = screen.getByText(/WINS/i);
  expect(winsText).toBeInTheDocument();
});
