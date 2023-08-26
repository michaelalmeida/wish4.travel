import { getAuth } from "firebase/auth";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { app } from "../../../config/server";

export const useUpdateUserProfile = () => {
  const auth = getAuth(app);

  const [updateProfile, updating, error] = useUpdateProfile(auth);

  return {
    updateProfile,
    updating,
    error,
  };
};
