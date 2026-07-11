import Button from "../Button/Button";
import styles from "./TaskCard.module.css";

function TaskCard({ task, onToggleComplete, onEdit, onDelete }) {
  const isOverdue =
    task.dueDate &&
    task.status !== "completed" &&
    new Date(task.dueDate) < new Date();

  return (
    <div
      className={`${styles.card} ${
        task.status === "completed" ? styles.done : ""
      }`}
    >
      <div className={styles.top}>
        <input
          type="checkbox"
          checked={task.status === "completed"}
          onChange={() => onToggleComplete(task.id)}
        />
        <div className={styles.info}>
          <h3 className={styles.title}>{task.title}</h3>
          {task.description && (
            <p className={styles.desc}>{task.description}</p>
          )}
        </div>
        <span className={`${styles.badge} ${styles[task.priority]}`}>
          {task.priority}
        </span>
      </div>

      <div className={styles.bottom}>
        <span className={isOverdue ? styles.late : styles.date}>
          📅{" "}
          {task.dueDate
            ? new Date(task.dueDate).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })
            : "No date"}
        </span>
        <div className={styles.btns}>
          <Button variant="ghost" size="sm" onClick={() => onEdit(task)}>
            Edit
          </Button>
          <Button variant="danger" size="sm" onClick={() => onDelete(task.id)}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
