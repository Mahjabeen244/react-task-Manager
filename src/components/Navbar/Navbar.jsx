import { Link } from "react-router-dom";
import { useVerification } from "../../context/VerificationContext";
import styles from "./Navbar.module.css";

function Navbar() {
  const { isVerified, endSession } = useVerification();

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
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
