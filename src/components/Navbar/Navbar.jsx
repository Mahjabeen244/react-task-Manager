import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        Task Manager
      </Link>

      <div className={styles.authLinks}>
        <Link to="/login" className={styles.loginLink}>
          Login
        </Link>
        <Link to="/register" className={styles.registerBtn}>
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
