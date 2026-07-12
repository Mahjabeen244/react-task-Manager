import { Link } from "react-router-dom";
import s from "./Footer.module.css";

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.content}>
        {/* Brand */}
        <div className={s.brand}>
          <div className={s.logo}>
            <div className={s.logoMark}>
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

            <span>
              Task<span style={{ color: "#a5b4fc" }}>Manager</span>
            </span>
          </div>

          <p>A clean dashboard to organize your work effortlessly.</p>
        </div>

        {/* Navigation */}
        <div className={s.nav}>
          <h4>Navigation</h4>

          <Link to="/dashboard">Dashboard</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>

        {/* Tech Stack */}
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
        <p>©️ {new Date().getFullYear()} Task Manager. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
