import { Link } from "react-router-dom";
import styles from "./Home.module.css";
function Home() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Organize Your Work, Effortlessly</h1>
      <p className={styles.subtitle}>
        Task Manager helps you plan, track, and complete your tasks — all in one
        clean, simple dashboard.
      </p>
      <Link to="/dashboard" className={styles.ctaButton}>
        Get Started
      </Link>
    </div>
  );
}
export default Home;
