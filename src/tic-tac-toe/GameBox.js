

export function GameBox({ onPlayerClick, val }) {

  // const [val, setVal] = useState(null)
  const styles = { color: val === "X" ? "green" : "red" };
  return (
    <div
      onClick={onPlayerClick}
      className="game-box"
      style={styles}
    >
      {val}
    </div>
  );
}
