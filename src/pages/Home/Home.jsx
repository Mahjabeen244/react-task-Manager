import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.logo}>
        <span>Task Manager</span>
      </div>

      <h1 className={styles.title}>Organize Your Work, Effortlessly</h1>
      <p className={styles.subtitle}>
        A clean, straightforward dashboard to plan, track, and complete your
        daily tasks without the clutter.
      </p>
      <Link to="/dashboard" className={styles.ctaButton}>
        Get Started
      </Link>
    </div>
  );
}
export default Home;
