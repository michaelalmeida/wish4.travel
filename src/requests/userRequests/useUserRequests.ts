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
        uid: data.uid || "",
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
        url: "/user/info",
        data: user,
      }),
    onSettled: () =>
      queryClient.invalidateQueries(REQUEST_ACTIONS.ADD_USER_INFO),
    onSuccess: (user: UserInfo) => {
      setUser({
        email: user.email,
        uid: user.uid,
        firstName: user.firstName,
      });
    },
  });

  const getUserInfoMutation = useMutation<
    UserInfo,
    AxiosError<CustomErrorResponse>,
    string
  >({
    mutationKey: REQUEST_ACTIONS.GET_USER_INFO,
    mutationFn: (uid: string) =>
      requestReactQueryHelper({
        method: "GET",
        url: `/user/info/${uid}`,
      }),
    onSettled: () =>
      queryClient.invalidateQueries(REQUEST_ACTIONS.GET_USER_INFO),
    onSuccess: (user: UserInfo) => {
      setUser({
        email: user.email,
        uid: user.uid,
        firstName: user.firstName,
        username: user.username,
      });
    },
  });

  const updateUserInfoMutation = useMutation<
    UserInfo,
    AxiosError<CustomErrorResponse>,
    any
  >({
    mutationKey: REQUEST_ACTIONS.UPDATE_USER_INFO,
    mutationFn: (user: any) =>
      requestReactQueryHelper({
        method: "PATCH",
        url: `/user/info/${user.uid}`,
        data: user,
      }),
    onSettled: () =>
      queryClient.invalidateQueries(REQUEST_ACTIONS.UPDATE_USER_INFO),
  });

  return {
    createUserMutation,
    addUserInfoMutation,
    getUserInfoMutation,
    updateUserInfoMutation,
  };
};
