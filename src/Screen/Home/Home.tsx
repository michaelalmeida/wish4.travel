import React from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useUserCookie } from "../../Hooks/useUser";
import { Dashboard } from "../Dashboard";

export const Home = () => {
  const { userId } = useUserCookie();

  return userId ? <Dashboard /> : <Navigate to={ROUTES.LOGIN} />;
};
