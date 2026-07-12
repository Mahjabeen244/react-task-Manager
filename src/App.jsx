import { Routes, Route } from "react-router-dom";
import { VerificationProvider } from "./context/VerificationContext";
import { ToastProvider } from "./context/ToastContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";

function App() {
  return (
    <VerificationProvider>
      <ToastProvider>
        <div className="app-layout">
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </ToastProvider>
    </VerificationProvider>
  );
}

export default App;
