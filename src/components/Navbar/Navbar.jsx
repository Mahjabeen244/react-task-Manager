import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        Task Manager
      </Link>
      <ul className={styles.links}>
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
            className={location.pathname === "/dashboard" ? styles.active : ""}
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
        <li>
          <Link
            to="/login"
            className={location.pathname === "/login" ? styles.active : ""}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className={location.pathname === "/register" ? styles.active : ""}
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
