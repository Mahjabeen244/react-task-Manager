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
