import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useUserRequests } from "../../requests/userRequests/useUserRequests";
import { toast } from "react-toastify";
import { UserInfo } from "../../Models/User.model";
import { useUserEmailVerification } from "./useUserEmailVerification";

type UserCreation = Omit<UserInfo, "uid"> & {
  password: string;
};

export const useUserCreation = () => {
  const { t } = useTranslation();
  const { createUserMutation, addUserInfoMutation } = useUserRequests();
  const { sendEmailVerification } = useUserEmailVerification();

  const createUser = async ({
    email,
    password,
    language,
    firstName,
  }: UserCreation) => {
    const createdUserData = await createUserMutation.mutateAsync({
      email,
      password,
    });
    await addUserInfoMutation.mutateAsync({
      uid: createdUserData.uid,
      firstName,
      language: language,
      email: createdUserData.email,
    });

    sendEmailVerification();
  };

  useEffect(() => {
    if (createUserMutation.isSuccess && addUserInfoMutation.isSuccess) {
      toast(t("signUp.success"));
    }
  }, [createUserMutation.isSuccess, addUserInfoMutation.isSuccess]);

  console.log(createUserMutation.error);

  return {
    createUser,
    user: createUserMutation.data,
    loading: createUserMutation.isLoading || addUserInfoMutation.isLoading,
    error: createUserMutation.isError || addUserInfoMutation.isError,
    errorMessage: createUserMutation.error?.message,
  };
};
