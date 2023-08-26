import { redirect } from "react-router-dom";
import { routes } from "../constants/routes";
import { useUserCookie } from "../Hooks/useUser";

export const useHomeLoader = () => {
  const { userId } = useUserCookie();

  if (!userId) {
    return redirect(routes.LOGIN);
  }

  return null;
};
