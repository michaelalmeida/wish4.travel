import { useMutation, useQueryClient } from "react-query";
import { CreateUser, User, UserInfo } from "../../Models/User.model";
import { REQUEST_ACTIONS } from "../../constants/requests";
import { useUserContext, useUserCookie } from "../../Hooks/useUser";
import {
  requestReactQueryHelper,
  CustomErrorResponse,
} from "../../helpers/reactQuery.helper";
import { AxiosError } from "axios";

export const useUserRequests = () => {
  const queryClient = useQueryClient();
  const { setUser } = useUserContext();
  const { saveUserIdAsCookie } = useUserCookie();

  const createUserMutation = useMutation<
    User,
    AxiosError<CustomErrorResponse>,
    CreateUser
  >({
    mutationKey: REQUEST_ACTIONS.CREATE_USER,
    mutationFn: async (user: CreateUser) =>
      await requestReactQueryHelper({
        method: "POST",
        url: "/user",
        data: user,
      }),
    onSettled: () => queryClient.invalidateQueries(REQUEST_ACTIONS.CREATE_USER),
    onSuccess: (data: User) => {
      saveUserIdAsCookie(data.uid);

      setUser({
        email: data.email || "",
        emailVerified: data.emailVerified || false,
        id: data.uid || "",
      });
    },
  });

  const addUserInfoMutation = useMutation<
    any,
    AxiosError<CustomErrorResponse>,
    UserInfo
  >({
    mutationKey: REQUEST_ACTIONS.ADD_USER_INFO,
    mutationFn: (user: UserInfo) =>
      requestReactQueryHelper({
        method: "POST",
        url: `/user/userInformation`,
        data: user,
      }),
    onSettled: () =>
      queryClient.invalidateQueries(REQUEST_ACTIONS.ADD_USER_INFO),
  });

  return {
    createUserMutation,
    addUserInfoMutation,
  };
};
