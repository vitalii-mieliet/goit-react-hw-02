export default function Feedback({ feedback }) {
  return (
    <ul>
      {feedback.map(([type, value]) => (
        <li key={type}>
          <span>{type}: </span>
          <span>{value}</span>
        </li>
      ))}
    </ul>
  );
}
