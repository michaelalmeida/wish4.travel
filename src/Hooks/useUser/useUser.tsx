import React, { useContext, useState } from "react";
import { useUserCookie } from "./useUserCookie";
import { UserInfo } from "../../Models/User.model";

interface IUserContext {
  user: UserInfo;
  clearUser: () => void;
  isAuth?: boolean;
  setUser: (user: UserInfo) => void;
  setIsAuth: (isAuth: boolean) => void;
}

const userDefaultValue = {
  email: "",
  uid: "",
  username: "",
  firstName: "",
};

const defaultState = {
  user: userDefaultValue,
  clearUser: () => void {},
  setUser: () => void {},
  isAuth: false,
  setIsAuth: () => void {},
};

const UserContext = React.createContext<IUserContext>(defaultState);

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext must be used within a ToastProvider");
  }
  return context;
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { userId } = useUserCookie();
  const [user, setUser] = useState<UserInfo>(userDefaultValue);
  const [isAuth, setIsAuth] = useState<boolean>(!!userId);

  const clearUser = () => {
    setUser(userDefaultValue);
  };

  return (
    <UserContext.Provider
      value={{ setIsAuth, clearUser, setUser, isAuth, user }}
    >
      {children}
    </UserContext.Provider>
  );
};
