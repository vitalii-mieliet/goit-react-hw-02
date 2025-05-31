export default function Options({
  updateFeedback,
  resetFeedbak,
  types,
  total,
}) {
  return (
    <ul>
      {types.map((type) => (
        <li key={type}>
          <button type="button" onClick={() => updateFeedback(type)}>
            {type}
          </button>
        </li>
      ))}
      {total > 0 && (
        <li>
          <button type="button" onClick={resetFeedbak}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
}
