import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useUserContext, useUserCookie } from "../../Hooks/useUser";
import { Dashboard } from "../Dashboard";
import { useUserRequests } from "../../requests/userRequests/useUserRequests";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { user } = useUserContext();
  const { userId } = useUserCookie();
  const { getUserInfoMutation } = useUserRequests();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (userId) {
      getUserInfoMutation.mutate(userId);
    }
  }, [userId]);

  useEffect(() => {
    if (getUserInfoMutation.data?.language) {
      i18n.changeLanguage(getUserInfoMutation.data.language);
    }
  }, [getUserInfoMutation.data?.language]);

  return userId ? <Dashboard user={user} /> : <Navigate to={ROUTES.LOGIN} />;
};
