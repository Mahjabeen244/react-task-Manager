import { Link, useLocation } from "react-router-dom";
import { useVerification } from "../../context/VerificationContext";
import styles from "./Navbar.module.css";

function Navbar() {
  const { isVerified, userName, endSession } = useVerification();
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <div className={styles.logoMark}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="7" height="7" rx="1.5" />
            <rect x="14" y="4" width="7" height="7" rx="1.5" />
            <rect x="3" y="15" width="7" height="5" rx="1.5" />
            <path d="M14 17.5h7" />
            <path d="M14 20h4.5" />
          </svg>
        </div>
        <span className={styles.logoText}>
          Task<span className={styles.logoAccent}>Manager</span>
        </span>
      </Link>

      <div className={styles.authLinks}>
        {isVerified ? (
          <>
            <div className={styles.userChip}>
              <div className={styles.userAvatar}>
                {userName ? userName.charAt(0).toUpperCase() : "U"}
              </div>
              <span className={styles.username}>{userName}</span>
            </div>
            <button className={styles.logoutBtn} onClick={endSession}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className={`${styles.loginLink} ${
                location.pathname === "/login" ? styles.activeLink : ""
              }`}
            >
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
