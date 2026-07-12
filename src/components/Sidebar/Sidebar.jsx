import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getTasks } from "../../services/taskservice";
import { useVerification } from "../../context/VerificationContext";
import s from "./Sidebar.module.css";

function getLocalDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function Sidebar({ isOpen, onClose, onToggleTask }) {
  const location = useLocation();
  const { userName, endSession } = useVerification();
  const [showProfile, setShowProfile] = useState(false);

  if (!isOpen) return null;

  const allTasks = getTasks();
  const todayString = getLocalDateString(new Date());

  const todaysTasks = allTasks.filter((task) => {
    if (!task.dueDate) return false;
    const taskDateOnly = task.dueDate.split("T")[0];
    return taskDateOnly === todayString;
  });

  const priorityOrder = { high: 0, medium: 1, low: 2 };
  const sortedTasks = [...todaysTasks].sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  );

  return (
    <div className={s.overlay} onClick={onClose}>
      <aside className={s.drawer} onClick={(e) => e.stopPropagation()}>
        <div className={s.brand}>
          <div className={s.brandLeft}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#667eea"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
            <span className={s.brandText}>Task Manager</span>
          </div>
          <button className={s.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        <div className={s.section}>
          <p className={s.sectionTitle}>Navigation</p>
          <ul className={s.menu}>
            <li>
              <Link
                to="/dashboard"
                className={location.pathname === "/dashboard" ? s.active : ""}
                onClick={onClose}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="7" height="9" />
                  <rect x="14" y="3" width="7" height="5" />
                  <rect x="14" y="12" width="7" height="9" />
                  <rect x="3" y="16" width="7" height="5" />
                </svg>
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={location.pathname === "/about" ? s.active : ""}
                onClick={onClose}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className={s.divider}></div>

        <div className={s.section}>
          <div className={s.sectionHead}>
            <p className={s.sectionTitle}>Today's Tasks</p>
            {sortedTasks.length > 0 && (
              <span className={s.taskCount}>{sortedTasks.length}</span>
            )}
          </div>

          {sortedTasks.length > 0 ? (
            <ul className={s.taskList}>
              {sortedTasks.map((task) => (
                <li
                  key={task.id}
                  className={`${s.taskRow} ${
                    task.status === "completed" ? s.taskDone : ""
                  }`}
                >
                  <label className={s.taskInfo}>
                    <input
                      type="checkbox"
                      className={s.checkbox}
                      checked={task.status === "completed"}
                      onChange={() => onToggleTask && onToggleTask(task.id)}
                    />
                    <span className={s.taskName}>{task.title}</span>
                    <span
                      className={`${s.taskPriority} ${
                        s[`p-${task.priority}`] || ""
                      }`}
                    >
                      {task.priority}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          ) : (
            <div className={s.emptyBox}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#374151"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              <p className={s.empty}>No tasks due today</p>
            </div>
          )}
        </div>

        <div className={s.spacer}></div>

        <div className={s.footer}>
          <div className={s.divider}></div>

          <button
            className={s.profileToggle}
            onClick={() => setShowProfile((prev) => !prev)}
          >
            <div className={s.avatarSmall}>
              {userName ? userName.charAt(0).toUpperCase() : "U"}
            </div>
            <span className={s.profileToggleText}>{userName || "Profile"}</span>
            <svg
              className={`${s.chevron} ${showProfile ? s.chevronOpen : ""}`}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {showProfile && (
            <div className={s.profileCard}>
              <div className={s.avatar}>
                {userName ? userName.charAt(0).toUpperCase() : "U"}
              </div>
              <div className={s.profileInfo}>
                <span className={s.profileName}>{userName || "User"}</span>
                <span className={s.profileRole}>Student Account</span>
              </div>
            </div>
          )}

          <button className={s.logoutBtn} onClick={endSession}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <path d="M16 17l5-5-5-5" />
              <path d="M21 12H9" />
            </svg>
            Log Out
          </button>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
