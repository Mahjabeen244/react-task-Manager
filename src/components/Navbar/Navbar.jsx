import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        Task Manager
      </Link>
      <div className={styles.menu}>
        <ul className={styles.pageLinks}>
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? styles.active : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className={
                location.pathname === "/dashboard" ? styles.active : ""
              }
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? styles.active : ""}
            >
              About
            </Link>
          </li>
        </ul>
        <div className={styles.authLinks}>
          <Link to="/login" className={styles.loginLink}>
            Login
          </Link>
          <Link to="/register" className={styles.registerBtn}>
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
