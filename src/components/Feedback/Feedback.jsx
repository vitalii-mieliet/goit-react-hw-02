import style from "./Feedback.module.css";
export default function Feedback({ feedback }) {
  return (
    <ul className={style.list}>
      {feedback.map(([type, value]) => (
        <li className={style.item} key={type}>
          <span className={style.label}>{type} </span>
          <span className={style.quantity}>{value}</span>
        </li>
      ))}
    </ul>
  );
}
