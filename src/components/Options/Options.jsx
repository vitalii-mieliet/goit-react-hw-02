import style from "./Options.module.css";
export default function Options({
  updateFeedback,
  resetFeedbak,
  types,
  total,
}) {
  return (
    <ul className={style.list}>
      {types.map((type) => (
        <li key={type}>
          <button
            className={style.button}
            type="button"
            onClick={() => updateFeedback(type)}
          >
            {type}
          </button>
        </li>
      ))}
      {total > 0 && (
        <li>
          <button
            className={style.resetButton}
            type="button"
            onClick={resetFeedbak}
          >
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}
