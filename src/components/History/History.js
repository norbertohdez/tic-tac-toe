function History({ currHistory }) {
  const renderList = () => {
    return Object.entries(currHistory).map((item) => {
      return (
        <li key={item[0]}>
          {item[0]}: {item[1]}
        </li>
      );
    });
  };
  return (
    <div className="victory">
      <h2 className="victory-title">Victory board</h2>
      <ul className="victory-list">{currHistory && renderList()}</ul>
    </div>
  );
}

export default History;
