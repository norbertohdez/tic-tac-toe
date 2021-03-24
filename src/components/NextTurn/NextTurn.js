function NextTurn({ won, boardFull, currTurn }) {
  return (
    <p className="status">
      <strong className={`${won || boardFull ? "hide" : ""} status-text`}>
        Who's next:
      </strong>{" "}
      <span className="next">{currTurn}</span>{" "}
      <span className={`${won || boardFull ? "" : "hide"} status-text`}>
        WINS!
      </span>
    </p>
  );
}

export default NextTurn;
