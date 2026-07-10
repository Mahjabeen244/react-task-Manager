import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>error 404 - NotFound</h1>
      <p className={styles.text}>Page not found!</p>
    </div>
  );
}

export default NotFound;
