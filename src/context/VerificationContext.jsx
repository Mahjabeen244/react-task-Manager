import { createContext, useState, useContext } from "react";

const VerificationContext = createContext();

function VerificationProvider({ children }) {
  const [isVerified, setIsVerified] = useState(false);

  const verifyUser = () => setIsVerified(true);
  const endSession = () => setIsVerified(false);

  return (
    <VerificationContext.Provider
      value={{ isVerified, verifyUser, endSession }}
    >
      {children}
    </VerificationContext.Provider>
  );
}

const useVerification = () => useContext(VerificationContext);

export { VerificationProvider, useVerification };
