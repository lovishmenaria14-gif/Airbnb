import { createContext, useState } from "react";

export const authDataContext = createContext();

function AuthContext({ children }) {
  const serverUrl = "https://airbnb-1-s2he.onrender.com";

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