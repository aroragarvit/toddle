import { createContext, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Progress, Flex } from "@chakra-ui/react";

export const AuthContext = createContext({
  user: null,
  setUser: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      setIsAuthenticated(true);
      setLoading(false);
    } else {
      setUser(null);
      setIsAuthenticated(false);
      setLoading(false);
    }
  });

  return (
    <AuthContext.Provider
      value={{ user, setIsAuthenticated, setUser, isAuthenticated }}
    >
      {loading ? (
        <Flex h={"100vh"} w={"100vw"} align={"center"} justify={"center"}>
          <Progress size="xs" isIndeterminate />
        </Flex>
      ) : (
        <>{children}</>
      )}
    </AuthContext.Provider>
  );
};
