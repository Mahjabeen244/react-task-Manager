import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterBar from "../../components/FilterBar/FilterBar";
import TaskCard from "../../components/TaskCard/TaskCard";
import Modal from "../../components/Modal/Modal";
import TaskForm from "../../components/TaskForm/TaskForm";
import Loader from "../../components/Loader/Loader";
import usetask from "../../hooks/usetask";
import s from "./Dashboard.module.css";

function Dashboard() {
  const { tasks, loading, saveTask, removeTask, toggleTask } = usetask();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("recent");
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const total = tasks.length;
  const done = tasks.filter((t) => t.status === "completed").length;
  const pending = total - done;

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

  return (
    <div className={s.page}>
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onToggleTask={toggleTask}
      />

      <div className={s.main}>
        <div className={s.head}>
          <div className={s.headLeft}>
            <button className={s.menuBtn} onClick={() => setSidebarOpen(true)}>
              ☰
            </button>
            <div>
              <h1 className={s.title}>Dashboard</h1>
              <p className={s.subtitle}>Here's what's on your plate today</p>
            </div>
          </div>
          <Button variant="primary" onClick={() => setModal(true)}>
            + Add Task
          </Button>
        </div>

        {loading ? (
          <Loader />
        ) : (
          <>
            <div className={s.stats}>
              <div className={`${s.stat} ${s.statTotal}`}>
                <span className={s.statLabel}>Total</span>
                <b className={s.statValue}>{total}</b>
              </div>
              <div className={`${s.stat} ${s.statDone}`}>
                <span className={s.statLabel}>Done</span>
                <b className={s.statValue}>{done}</b>
              </div>
              <div className={`${s.stat} ${s.statPending}`}>
                <span className={s.statLabel}>Pending</span>
                <b className={s.statValue}>{pending}</b>
              </div>
            </div>

            <div className={s.toolbar}>
              <SearchBar value={search} onChange={setSearch} />
              <FilterBar
                activeFilter={filter}
                onFilterChange={setFilter}
                sortBy={sort}
                onSortChange={setSort}
              />
            </div>

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
          onSave={(data) => saveTask(editing, data)}
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
