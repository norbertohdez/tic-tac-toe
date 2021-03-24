import PropTypes from "prop-types";

function Board({ gameState, inputFn, boardFull, restart }) {
  const renderCells = () => {
    return Object.entries(gameState).map((cell) => {
      return (
        <div
          key={cell[0]}
          onClick={() => {
            if (!cell[1]) inputFn(cell[0]);
          }}
          className={`board-cell ${cell[1] ? "" : "available"}`}
        >
          {cell[1]}
        </div>
      );
    });
  };
  return (
    <section
      className={`${boardFull ? "full" : ""} board`}
      onClick={boardFull ? restart : () => {}}
    >
      {gameState && renderCells()}
    </section>
  );
}

Board.propTypes = {
  gameState: PropTypes.object.isRequired,
  inputFn: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired,
  boardFull: PropTypes.bool,
};

export default Board;
