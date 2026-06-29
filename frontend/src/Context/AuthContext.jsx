import { createContext, useState } from "react";

export const authDataContext = createContext();

function AuthContext({ children }) {
  const serverUrl = "http://localhost:8000";

  const [user, setUser] = useState(null);

  const value = {
    serverUrl,
    user,
    setUser,
  };

  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  );
}

export default AuthContext;