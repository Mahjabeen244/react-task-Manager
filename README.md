## React Task Manager

As my first major React project, I wanted to build something I would actually use every day. This is a clean, straightforward task management dashboard that focuses on smooth user experience and a premium dark UI. No backend is required—all data is saved directly in the browser using Local Storage.

## Core Features

- Authentication UI: Clean, classic Login and Register screens.
- Full CRUD Operations: Seamlessly add, edit, and delete tasks.
- Task Details: Add descriptions, set due dates, and mark tasks as Complete or Pending.
- Priority Levels: Colorcoded High, Medium, and Low priority tags.
- Smart Search: Instantly find tasks by searching their title or description.
- Advanced Filtering: Filter tasks by their status or priority level.
- Flexible Sorting: Organize view by Due Date, Priority, or what was recently added.
- Persistent Data: Refresh the page, and your tasks are still there.

## Extra Features Implemented

Basicaslly I implemented:

- Context API: Used for global state management (handling the Login/Logout UI flow smoothly).
- Custom React Hooks: Extracted all the task logic into a useTasks hook to keep the Dashboard component clean and readable.
- Toast Notifications: A sleek, sliding notification pops up when a task is deleted .
- Premium UI/UX: Frosted glass navbar, subtle background grids, glowing borders, and a slideout sidebar.

## Technologies Used

- React (Functional Components & Hooks)
- React Router DOM (Client-side routing)
- Vite (Lightning-fast build tool)
- CSS Modules (Scoped, clean styling)
- Local Storage (Client-side data persistence)

## Running the Project:

- Node.js should installed
- Extentions like (ES7,Prettier)
- Clone this repository to your local machine:
- git clone https://github.com/Mahjabeen244/react-task-manager.git
- Then open the folder and navigate to project folder by this command:
  "cd react-task-manager"
- Install the required dependencies with folder:
  " npm create vite@latest react-task-manager -- --template react"
- Then start the development server by:
  "npm run dev"

## Project Structure

src/
├── assets/  
├── components/ # Small, reusable UI pieces
│ ├── Button/ (.jsx and module.css) # Reusable gradient/ghost buttons
│ ├── FilterBar/ (.jsx and module.css) # Pill-shaped filters with color dots
│ ├── Footer/ (.jsx and module.css) # Classic 3-column footer
│ ├── Loader/ (.jsx and module.css) # Spinning loading indicator
│ ├── Modal/ (.jsx and module.css) # Dark, sliding popup window
│ ├── Navbar/ (.jsx and module.css) # Frosted-glass top navigation
│ ├── SearchBar/ (.jsx and module.css) # Input with clear button
│ ├── Sidebar/ (.jsx and module.css) # Hidden slide-out drawer menu
│ ├── TaskCard/ (.jsx and module.css) # Individual task display block
│ └── TaskForm/ (.jsx and module.css) # Smart form for adding/editing
├── context/ (ToastContext.jsx and Toastmodule.css) # React Context (Global state)
├── hooks/ (usetask.jsx) # Custom Hooks (useTasks logic)
├── pages/ # Full-screen views
│ ├── About/ (.jsx and module.css) # Info page
│ ├── Dashboard/ (.jsx and module.css) # The main app workspace
│ ├── Home/ (.jsx and module.css) # Premium landing page
│ ├── Login/ (.jsx and module.css) # Authentication UI
│ ├── NotFound/ (.jsx and module.css) # 404 error page
│ └── Register/ (.jsx and module.css) # Authentication UI
├── services/ (Taskservice.jsx ) # Local Storage function (
├── utils/ (helper.jsx)# Helper functions (date formatting)
├── App.jsx # Main router wrapper
└── main.jsx # Entry point
