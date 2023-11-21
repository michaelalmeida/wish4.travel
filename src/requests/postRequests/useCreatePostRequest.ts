import { useMutation } from "react-query";
import { REQUEST_ACTIONS } from "../../constants/requests";
import { useUserCookie } from "../../Hooks/useUser";
import {
  requestReactQueryHelper,
  CustomErrorResponse,
} from "../../helpers/reactQuery.helper";
import { AxiosError } from "axios";
import { CreatePost, Post } from "../../Models/Post.model";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { DASHBOARD_ROUTES } from "@constants/routes";

export const useCreatePostRequest = () => {
  const { userId } = useUserCookie();
  const navigate = useNavigate();

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
    onSuccess: (_) => {
      toast.success("Post created successfully");
      navigate(DASHBOARD_ROUTES.LIST);
    },
  });

  return createPostRequest;
};
