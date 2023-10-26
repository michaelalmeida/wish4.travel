import { redirect } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { useUserCookie } from "../Hooks/useUser";

export const useHomeLoader = () => {
  const { userId } = useUserCookie();

  if (!userId) {
    return redirect(ROUTES.LOGIN);
  }

  return null;
};
