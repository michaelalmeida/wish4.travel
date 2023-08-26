import { useCookies } from "react-cookie";
import { USER } from "../../constants/cookies";

export const useUserCookie = () => {
  const [cookie, setCookie, removeCookie] = useCookies([USER.ID]);

  const saveUserIdAsCookie = (userId: string) => {
    setCookie(USER.ID, userId);
  };

  const cleanUserIdCookie = () => {
    removeCookie(USER.ID);
  };

  return {
    saveUserIdAsCookie,
    cleanUserIdCookie,
    userId: cookie[USER.ID],
  };
};
