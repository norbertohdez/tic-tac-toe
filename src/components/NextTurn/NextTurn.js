function NextTurn({ won, boardFull, currTurn }) {
  return (
    <p className="status">
      {!won && !boardFull && (
        <strong className="status-text">Who's next:</strong>
      )}{" "}
      <span className="next">{currTurn}</span>{" "}
      {(won || boardFull) && <span className="status-text">WINS!</span>}
    </p>
  );
}

export default NextTurn;
