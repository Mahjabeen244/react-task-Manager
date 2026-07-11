import { Link } from "react-router-dom";
import s from "./Footer.module.css";

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.grid}>
        <div className={s.brand}>
          <h3>Task Manager</h3>
          <p>
            Organize your work effortlessly with a clean, straightforward
            dashboard built right in your browser.
          </p>
        </div>

        <div className={s.links}>
          <h4>Navigation</h4>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/about">About</Link>
        </div>

        <div className={s.links}>
          <h4>Project</h4>
          <a
            href="https://github.com/Mahjabeen244/react-task-manager"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
        </div>
      </div>

      <div className={s.bottom}>
        <p>
          © {new Date().getFullYear()} Task Manager. Built with React & Vite.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
