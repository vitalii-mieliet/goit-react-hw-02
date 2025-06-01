import style from "./Description.module.css";
export default function Description() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Sip Happens Café</h1>
      <p className={style.paragraph}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
