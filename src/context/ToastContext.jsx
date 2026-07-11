import { createContext, useState, useContext } from "react";
import s from "./Toast.module.css";

const ToastContext = createContext();

function ToastProvider({ children }) {
  const [msg, setMsg] = useState("");
  const [show, setShow] = useState(false);
  const pop = (message) => {
    setMsg(message);
    setShow(true);
    setTimeout(() => setShow(false), 3000);
  };

  return (
    <ToastContext.Provider value={{ pop }}>
      {children}
      {show && <div className={s.toast}>{msg}</div>}
    </ToastContext.Provider>
  );
}
const useToast = () => useContext(ToastContext);

export { ToastProvider, useToast };
