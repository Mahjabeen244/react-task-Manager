import { Link } from "react-router-dom";
import s from "./Footer.module.css";

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.content}>
        <div className={s.brand}>
          <div className={s.logo}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
            <span>Task Manager</span>
          </div>
          <p>A clean dashboard to organize your work effortlessly.</p>
        </div>
        <div className={s.nav}>
          <h4>Navigation</h4>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>

        <div className={s.stack}>
          <h4>Built With</h4>
          <div className={s.badges}>
            <span className={s.badge}>React</span>
            <span className={s.badge}>Router</span>
            <span className={s.badge}>Vite</span>
            <span className={s.badge}>Local Storage</span>
          </div>
          <a
            href="https://github.com/Mahjabeen244/react-task-manager"
            target="_blank"
            rel="noreferrer"
            className={s.githubLink}
          >
            View on GitHub →
          </a>
        </div>
      </div>
      <div className={s.bottom}>
        <p>© {new Date().getFullYear()} Task Manager. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
