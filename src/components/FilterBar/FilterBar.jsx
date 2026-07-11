import styles from "./FilterBar.module.css";

function FilterBar({ activeFilter, onFilterChange, sortBy, onSortChange }) {
  const filters = [
    { value: "all", label: "All Tasks" },
    { value: "completed", label: "Completed" },
    { value: "pending", label: "Pending" },
    { value: "high", label: "High Priority", color: "high" },
    { value: "medium", label: "Medium Priority", color: "medium" },
    { value: "low", label: "Low Priority", color: "low" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.filterList}>
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={`${styles.filterBtn} ${
              activeFilter === filter.value ? styles.active : ""
            }`}
          >
            {filter.color && (
              <span className={`${styles.dot} ${styles[filter.color]}`}></span>
            )}
            {filter.label}
          </button>
        ))}
      </div>
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className={styles.sortSelect}
      >
        <option value="recent">Recently Added</option>
        <option value="dueDate">Due Date</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
}

export default FilterBar;
