import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.gridBg}></div>

      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.reactLogo}>
            <svg viewBox="-11.5 -10.23174 23 20.46348" width="28" height="28">
              <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
              <g stroke="#61dafb" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </svg>
            <span>Built with React</span>
          </div>

          <h1>
            Master Your Tasks.
            <br />
            <span>Own Your Day.</span>
          </h1>
          <p>
            Organize your work and track progress effortlessly, right in your
            browser.
          </p>
          <Link to="/dashboard" className={styles.btn}>
            Get Started
          </Link>
        </div>

        <div className={styles.right}>
          <div className={styles.cardStack}>
            <div className={styles.card}>
              <div className={styles.mockRow}>
                <div className={styles.mockCheck}></div>
                <div className={styles.mockText}></div>
                <div className={`${styles.mockPill} ${styles.high}`}></div>
              </div>
              <div className={styles.mockLine}></div>
            </div>

            <div className={styles.card}>
              <div className={styles.mockRow}>
                <div className={`${styles.mockCheck} ${styles.done}`}></div>
                <div className={styles.mockText}></div>
                <div className={`${styles.mockPill} ${styles.med}`}></div>
              </div>
              <div className={styles.mockLine}></div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill}></div>
              </div>
            </div>
          </div>

          <div className={styles.glow}></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
