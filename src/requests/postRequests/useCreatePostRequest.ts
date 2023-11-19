import { useMutation } from "react-query";
import { REQUEST_ACTIONS } from "../../constants/requests";
import { useUserCookie } from "../../Hooks/useUser";
import {
  requestReactQueryHelper,
  CustomErrorResponse,
} from "../../helpers/reactQuery.helper";
import { AxiosError } from "axios";
import { CreatePost, Post } from "../../Models/Post.model";

export const useCreatePostRequest = () => {
  const { userId } = useUserCookie();

  const createPostRequest = useMutation<
    Post,
    AxiosError<CustomErrorResponse>,
    CreatePost
  >({
    mutationKey: REQUEST_ACTIONS.CREATE_USER,
    mutationFn: async (post: CreatePost) =>
      await requestReactQueryHelper({
        method: "POST",
        url: `/post/${userId}`,
        data: post,
      }),
  });

  return createPostRequest;
};
