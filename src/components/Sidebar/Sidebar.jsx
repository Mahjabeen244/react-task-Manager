import { Link, useLocation } from "react-router-dom";
import s from "./Sidebar.module.css";

function Sidebar() {
  const location = useLocation();
  return (
    <aside className={s.sidebar}>
      <h3 className={s.title}>Menu</h3>
      <ul className={s.menu}>
        <li>
          <Link
            to="/dashboard"
            className={location.pathname === "/dashboard" ? s.active : ""}
          >
            📊 Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? s.active : ""}
          >
            ℹ️ About
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
