import { getAuth } from "firebase/auth";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { app } from "../../../config/firebase";

export const useUserEmailVerification = () => {
  const auth = getAuth(app);

  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);

  return {
    sendEmailVerification,
    sending,
    error,
  };
};
