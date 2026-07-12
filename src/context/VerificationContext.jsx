import { createContext, useState, useContext } from "react";

const VerificationContext = createContext();

function VerificationProvider({ children }) {
  const [isVerified, setIsVerified] = useState(false);
  const [userName, setUserName] = useState("");

  const verifyUser = (name) => {
    setUserName(name);
    setIsVerified(true);
    localStorage.setItem("userName", name);
  };

  const endSession = () => {
    setIsVerified(false);
    localStorage.removeItem("userName");
  };

  return (
    <VerificationContext.Provider
      value={{ isVerified, verifyUser, userName, endSession }}
    >
      {children}
    </VerificationContext.Provider>
  );
}

const useVerification = () => useContext(VerificationContext);

export { VerificationProvider, useVerification };
