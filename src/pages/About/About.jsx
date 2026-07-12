import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>Why this app exists</span>
        <h1 className={styles.title}>
          About <span className={styles.highlight}>Task Manager</span>
        </h1>
        <p className={styles.subtitle}>
          A straightforward tool to organize your daily work. No complex setups,
          no servers — just a clean interface that saves your progress right in
          your browser.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.cardNumber}>01</span>
            <h3>Modern Stack</h3>
            <p>Built with React and Vite for a fast, smooth experience.</p>
          </div>

          <div className={styles.card}>
            <span className={styles.cardNumber}>02</span>
            <h3>Privacy First</h3>
            <p>Your data never leaves your device. Everything stays local.</p>
          </div>

          <div className={styles.card}>
            <span className={styles.cardNumber}>03</span>
            <h3>Instant Updates</h3>
            <p>Changes save automatically as you type and click.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
