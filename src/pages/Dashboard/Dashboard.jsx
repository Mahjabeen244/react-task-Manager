import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterBar from "../../components/FilterBar/FilterBar";
import TaskCard from "../../components/TaskCard/TaskCard";
import Modal from "../../components/Modal/Modal";
import TaskForm from "../../components/TaskForm/TaskForm";
import Loader from "../../components/Loader/Loader";
import useTasks from "../../hooks/useTasks";
import s from "./Dashboard.module.css";

function Dashboard() {
  const { tasks, loading, saveTask, removeTask, toggleTask } = useTasks();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("recent");
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
}
