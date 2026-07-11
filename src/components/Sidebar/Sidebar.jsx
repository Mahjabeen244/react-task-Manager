import { Link, useLocation } from "react-router-dom";
import s from "./Sidebar.module.css";

function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  if (!isOpen) return null;

  return (
    <div className={s.overlay} onClick={onClose}>
      <aside className={s.drawer} onClick={(e) => e.stopPropagation()}>
        <div className={s.top}>
          <h3>Menu</h3>
          <button className={s.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        <ul className={s.menu}>
          <li>
            <Link
              to="/dashboard"
              className={location.pathname === "/dashboard" ? s.active : ""}
              onClick={onClose}
            >
              📊 Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? s.active : ""}
              onClick={onClose}
            >
              ℹ️ About
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Sidebar;
