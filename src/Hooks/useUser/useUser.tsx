import React, { useContext, useState } from "react";
import { useUserCookie } from "./useUserCookie";

interface User {
  email: string;
  emailVerified: boolean;
  id: string;
}

interface IUserContext {
  user: User;
  clearUser: () => void;
  isAuth?: boolean;
  setUser: (user: User) => void;
  setIsAuth: (isAuth: boolean) => void;
}

const userDefaultValue = {
  email: "",
  emailVerified: false,
  id: "",
};

const defaultState = {
  user: userDefaultValue,
  clearUser: () => void {},
  setUser: () => void {},
  isAuth: false,
  setIsAuth: () => void {},
};

const UserContext = React.createContext<IUserContext>(defaultState);

const useUser = () => {
  const { userId } = useUserCookie();
  const [user, setUser] = useState<User>(userDefaultValue);
  const [isAuth, setIsAuth] = useState<boolean>(!!userId);

  const clearUser = () => {
    setUser(userDefaultValue);
  };

  return {
    setIsAuth,
    clearUser,
    setUser,
    isAuth,
    user,
  };
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext must be used within a ToastProvider");
  }
  return context;
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const user = useUser();

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
