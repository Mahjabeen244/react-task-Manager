import s from "./Loader.module.css";

function Loader() {
  return (
    <div className={s.wrapper}>
      <div className={s.spinner}></div>
      <p>Loading tasks...</p>
    </div>
  );
}

export default Loader;
