import { useState, useEffect } from "react";
import { useToast } from "../context/ToastContext";
import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} from "../services/taskservice";

function usetask() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { pop } = useToast();

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
      pop("Task deleted successfully!");
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

export default usetask;
