import { useState, useEffect } from "react";
import Board from "../Board/Board";
import History from "../History/History";
import NextTurn from "../NextTurn/NextTurn";

const initialGameState = {
  c1: "",
  c2: "",
  c3: "",
  c4: "",
  c5: "",
  c6: "",
  c7: "",
  c8: "",
  c9: "",
};

const initialHistory = {
  "❎": 0,
  "🌀": 0,
  "NO ONE": 0,
};

function App() {
  const [history, setHistory] = useState(initialHistory);
  const [currTurn, setCurrTurn] = useState("🌀");
  const [won, setWon] = useState(false);
  const [boardFull, setBoardFull] = useState(false);
  const [gameState, setGameState] = useState(initialGameState);

  const inputTurn = (cell) => {
    const newState = { ...gameState, [cell]: currTurn };
    setGameState(newState);
    validateWin(newState);
  };

  const restart = () => {
    setCurrTurn("🌀");
    setWon(false);
    setBoardFull(false);
    setGameState(initialGameState);
  };

  const validateWin = (state) => {
    const { c1, c2, c3, c4, c5, c6, c7, c8, c9 } = state;
    if (
      (currTurn === c1 && currTurn === c2 && currTurn === c3) ||
      (currTurn === c4 && currTurn === c5 && currTurn === c6) ||
      (currTurn === c7 && currTurn === c8 && currTurn === c9) ||
      (currTurn === c1 && currTurn === c4 && currTurn === c7) ||
      (currTurn === c2 && currTurn === c5 && currTurn === c8) ||
      (currTurn === c3 && currTurn === c6 && currTurn === c9) ||
      (currTurn === c1 && currTurn === c5 && currTurn === c9) ||
      (currTurn === c3 && currTurn === c5 && currTurn === c7)
    ) {
      setWon(true);
    } else {
      if (Object.values(state).filter((v) => !!v).length === 9) {
        setCurrTurn("NO ONE");
        setWon(true);
      } else {
        setCurrTurn(currTurn === "🌀" ? "❎" : "🌀");
      }
    }
  };

  useEffect(() => {
    if (won) {
      setBoardFull(true);
      setHistory({ ...history, [currTurn]: history[currTurn] + 1 });
    }
    // eslint-disable-next-line
  }, [won]);

  return (
    <div>
      <h1 className="title">The Most Famous Game in the World</h1>
      <main>
        <NextTurn won={won} boardFull={boardFull} currTurn={currTurn} />
        <div className="flex">
          <Board
            inputFn={inputTurn}
            gameState={gameState}
            boardFull={boardFull}
            restart={restart}
          />
          <History currHistory={history} />
        </div>
      </main>
    </div>
  );
}

export default App;
