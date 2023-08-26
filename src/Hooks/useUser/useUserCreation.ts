import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { app } from "../../../config/server";
import { useUserContext } from "./useUser";
import { useUserEmailVerification } from "./useUserEmailVerification";

interface CreateUser {
  email: string;
  password: string;
}

export const useUserCreation = () => {
  const auth = getAuth(app);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const { sendEmailVerification } = useUserEmailVerification();
  const { setUser } = useUserContext();

  const createUser = async ({ email, password }: CreateUser) => {
    try {
      await createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      sendEmailVerification();

      setUser({
        email: user.user?.email || "",
        emailVerified: user.user?.emailVerified || false,
        id: user.user?.uid || "",
      });
    }
  }, [user]);

  return {
    createUser,
    user,
    loading,
    error,
  };
};
