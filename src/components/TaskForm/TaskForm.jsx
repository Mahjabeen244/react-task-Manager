import { useState, useEffect } from "react";
import Button from "../Button/Button";
import s from "./TaskForm.module.css";

function TaskForm({ task, onSave, onCancel }) {
  const [form, setForm] = useState({
    title: "",
    desc: "",
    priority: "medium",
    date: "",
  });
  useEffect(() => {
    if (task) {
      setForm({
        title: task.title || "",
        desc: task.description || "",
        priority: task.priority || "medium",
        date: task.dueDate ? task.dueDate.split("T")[0] : "",
      });
    }
  }, [task]);

  const submitForm = (e) => {
    e.preventDefault();
    onSave({ ...form, description: form.desc, dueDate: form.date });
  };

  return (
    <form onSubmit={submitForm} className={s.form}>
      <div className={s.field}>
        <label>Title *</label>
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="What to do?"
          required
        />
      </div>

      <div className={s.field}>
        <label>Details</label>
        <textarea
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
          placeholder="Any extra info..."
          rows="3"
        />
      </div>

      <div className={s.splitRow}>
        <div className={s.field}>
          <label>Priority</label>
          <select
            value={form.priority}
            onChange={(e) => setForm({ ...form, priority: e.target.value })}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className={s.field}>
          <label>Due Date</label>
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
        </div>
      </div>

      <div className={s.btnRow}>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          {task ? "Save Changes" : "Add Task"}
        </Button>
      </div>
    </form>
  );
}

export default TaskForm;
