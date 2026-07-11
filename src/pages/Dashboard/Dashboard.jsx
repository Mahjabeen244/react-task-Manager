import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterBar from "../../components/FilterBar/FilterBar";
import TaskCard from "../../components/TaskCard/TaskCard";
import Modal from "../../components/Modal/Modal";
import TaskForm from "../../components/TaskForm/TaskForm";
import Loader from "../../components/Loader/Loader";
import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} from "../../services/taskservice";
import s from "./Dashboard.module.css";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("recent");
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTasks(getTasks());
      setLoading(false);
    }, 400);
  }, []);

  const refresh = () => setTasks(getTasks());

  const saveTask = (data) => {
    if (editing) updateTask(editing.id, data);
    else addTask(data);
    refresh();
    setModal(false);
    setEditing(null);
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

  let visible = [...tasks];

  if (search) {
    const q = search.toLowerCase();
    visible = visible.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        (t.description && t.description.toLowerCase().includes(q))
    );
  }
  const filters = {
    completed: (t) => t.status === "completed",
    pending: (t) => t.status === "pending",
    high: (t) => t.priority === "high",
    medium: (t) => t.priority === "medium",
    low: (t) => t.priority === "low",
  };
  if (filters[filter]) visible = visible.filter(filters[filter]);

  if (sort === "dueDate")
    visible.sort(
      (a, b) => new Date(a.dueDate || "2099") - new Date(b.dueDate || "2099")
    );
  else if (sort === "priority") {
    const p = { high: 0, medium: 1, low: 2 };
    visible.sort((a, b) => p[a.priority] - p[b.priority]);
  } else visible.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const total = tasks.length,
    done = tasks.filter((t) => t.status === "completed").length;

  return (
    <div className={s.layout}>
      <Sidebar />

      <div className={s.main}>
        <div className={s.head}>
          <h1>Dashboard</h1>
          <Button variant="primary" onClick={() => setModal(true)}>
            + Add Task
          </Button>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <>
            <div className={s.stats}>
              <div className={s.stat}>
                <span>Total</span>
                <b>{total}</b>
              </div>
              <div className={s.stat}>
                <span>Done</span>
                <b>{done}</b>
              </div>
              <div className={s.stat}>
                <span>Pending</span>
                <b>{total - done}</b>
              </div>
            </div>

            <SearchBar value={search} onChange={setSearch} />
            <FilterBar
              activeFilter={filter}
              onFilterChange={setFilter}
              sortBy={sort}
              onSortChange={setSort}
            />

            <div className={s.list}>
              {visible.length === 0 ? (
                <div className={s.empty}>
                  <h3>
                    {search || filter !== "all"
                      ? "No matches found"
                      : "No tasks yet"}
                  </h3>
                  {!search && filter === "all" && (
                    <p>Click '+ Add Task' to start</p>
                  )}
                </div>
              ) : (
                visible.map((t) => (
                  <TaskCard
                    key={t.id}
                    task={t}
                    onToggleComplete={toggleTask}
                    onEdit={() => {
                      setEditing(t);
                      setModal(true);
                    }}
                    onDelete={removeTask}
                  />
                ))
              )}
            </div>
          </>
        )}
      </div>

      <Modal
        isOpen={modal}
        onClose={() => {
          setModal(false);
          setEditing(null);
        }}
        title={editing ? "Edit Task" : "New Task"}
      >
        <TaskForm
          task={editing}
          onSave={saveTask}
          onCancel={() => {
            setModal(false);
            setEditing(null);
          }}
        />
      </Modal>
    </div>
  );
}

export default Dashboard;
