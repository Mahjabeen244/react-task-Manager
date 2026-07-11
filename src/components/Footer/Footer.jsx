import { Link } from "react-router-dom";
import s from "./Footer.module.css";

function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.section}>
          <h3>Task Manager</h3>
          <p>
            A clean, straightforward tool to keep your daily work organized and
            on track.
          </p>
        </div>
        <div className={s.section}>
          <h4>Quick Links</h4>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/about">About</Link>
        </div>
        <div className={s.section}>
          <h4>Project</h4>
          <a
            href="https://github.com/Mahjabeen244/react-task-manager"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>

      <div className={s.bottomBar}>
        <p>© {new Date().getFullYear()} Built with React & Vite.</p>
      </div>
    </div>
  );
}

export default Footer;
