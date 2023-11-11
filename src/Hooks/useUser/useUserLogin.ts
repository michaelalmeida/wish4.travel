import { AuthError, getAuth, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { app } from "../../../config/firebase";
import { ROUTES } from "../../constants/routes";
import { useUserContext } from "./useUser";
import { useUserCookie } from "./useUserCookie";

interface UserLogin {
  email: string;
  password: string;
}

export const useUserLogin = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { saveUserIdAsCookie, cleanUserIdCookie } = useUserCookie();

  const auth = getAuth(app);
  const { user, setUser, setIsAuth, clearUser } = useUserContext();

  const [signInWithEmailAndPassword, userData, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const login = ({ email, password }: UserLogin) => {
    signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    signOut(auth);
    cleanUserIdCookie();
    navigate(ROUTES.HOME);
    clearUser();
  };

  useEffect(() => {
    if (userData?.user.email && userData.user.uid && !user.email) {
      setUser({
        email: userData.user.email,
        uid: userData.user.uid,
        emailVerified: userData.user.emailVerified,
      });

      setIsAuth(true);
      saveUserIdAsCookie(userData.user.uid);

      navigate(ROUTES.HOME);
    }
  }, [userData?.user.email, userData?.user.uid, user.email]);

  const errorMessageHandler = (error: AuthError): string => {
    switch (error.code) {
      case "auth/wrong-password":
        return t("form.error.password.wrong");
      case "auth/user-not-found":
        return t("form.error.userNotExists");
      default:
        return t("form.error.login.generic");
    }
  };

  return {
    login,
    logout,
    user,
    loading,
    error,
    errorMessageHandler,
  };
};
