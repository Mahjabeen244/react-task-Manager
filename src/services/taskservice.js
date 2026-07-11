const STORAGE_KEY = "react_task_manager_tasks";

export const getTasks = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
};

const saveTasks = (tasks) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

export const addTask = (taskData) => {
  const tasks = getTasks();
  const newTask = {
    id: Date.now().toString(),
    ...taskData,
    status: "pending",
    createdAt: new Date().toISOString(),
  };
  tasks.unshift(newTask);
  saveTasks(tasks);
  return newTask;
};

export const deleteTask = (id) => {
  const tasks = getTasks();
  const updatedTasks = tasks.filter((task) => task.id !== id);
  saveTasks(updatedTasks);
  return updatedTasks;
};

export const updateTask = (id, updatedData) => {
  const tasks = getTasks();
  const updatedTasks = tasks.map((task) =>
    task.id === id ? { ...task, ...updatedData } : task
  );
  saveTasks(updatedTasks);
  return updatedTasks;
};
