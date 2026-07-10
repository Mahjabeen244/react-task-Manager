import { Link } from "react-router-dom";
import styles from "./Navbarmodule.css";

function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.logo}>Task Manager</div>
    </nav>
  );
}
