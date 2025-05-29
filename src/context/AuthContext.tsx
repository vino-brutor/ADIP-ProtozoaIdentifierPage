import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { ReactNode } from "react";

type AuthContextType = {
  user: string | null;
  isAuthenticated: boolean;
  login: (crm: string, senha: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const USERS = [
  { crm: "123456", senha: "senha123" },
  { crm: "654321", senha: "senha456" },
  { crm: "111222", senha: "senha946" },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userSalvo = localStorage.getItem("user");
    if (userSalvo) {
      setUser(userSalvo);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (crm: string, senha: string): boolean => {
    const userFound = USERS.find(user => user.crm === crm && user.senha === senha);
    if (userFound) {
      localStorage.setItem("user", userFound.crm);
      setUser(userFound.crm);
      setIsAuthenticated(true);
      navigate("/form");
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext)!;
}