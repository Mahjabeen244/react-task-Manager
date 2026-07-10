import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>

      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>Total Tasks</p>
          <p className={styles.statValue}>0</p>
        </div>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>Completed</p>
          <p className={styles.statValue}>0</p>
        </div>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>Pending</p>
          <p className={styles.statValue}>0</p>
        </div>
      </div>

      <div className={styles.toolsRow}>
        <input
          type="text"
          placeholder="Search tasks..."
          className={styles.searchInput}
        />
        <select className={styles.filterSelect}>
          <option value="all">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>
      </div>

      <div className={styles.taskList}>
        <p className={styles.emptyText}>No tasks yet. Add your first task!</p>
      </div>
    </div>
  );
}

export default Dashboard;
