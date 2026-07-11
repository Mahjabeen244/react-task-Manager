import { Link } from "react-router-dom";
import { useVerification } from "../../context/VerificationContext";
import styles from "./Navbar.module.css";

function Navbar() {
  const { isVerified, endSession } = useVerification();

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.logoIcon}
        >
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
        Task Manager
      </Link>

      <div className={styles.authLinks}>
        {isVerified ? (
          <button className={styles.logoutBtn} onClick={endSession}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className={styles.loginLink}>
              Login
            </Link>
            <Link to="/register" className={styles.registerBtn}>
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
