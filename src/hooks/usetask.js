import { useState, useEffect } from "react";
import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} from "../services/taskservice";

function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTasks(getTasks());
      setLoading(false);
    }, 400);
  }, []);

  const refresh = () => setTasks(getTasks());

  const saveTask = (editing, data) => {
    if (editing) updateTask(editing.id, data);
    else addTask(data);
    refresh();
  };

  const removeTask = (id) => {
    if (window.confirm("Delete this task?")) {
      deleteTask(id);
      refresh();
    }
  };

  const toggleTask = (id) => {
    const t = tasks.find((t) => t.id === id);
    if (t) {
      updateTask(id, {
        status: t.status === "completed" ? "pending" : "completed",
      });
      refresh();
    }
  };

  return { tasks, loading, saveTask, removeTask, toggleTask };
}

export default useTasks;
