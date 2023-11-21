import { useMutation } from "react-query";
import { REQUEST_ACTIONS } from "../../constants/requests";
import {
  requestReactQueryHelper,
  CustomErrorResponse,
} from "../../helpers/reactQuery.helper";
import { AxiosError } from "axios";
import { Post } from "../../Models/Post.model";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { DASHBOARD_ROUTES } from "@constants/routes";

export const useUpdatePostRequest = () => {
  const navigate = useNavigate();

  const createPostRequest = useMutation<
    Post,
    AxiosError<CustomErrorResponse>,
    Post
  >({
    mutationKey: REQUEST_ACTIONS.CREATE_USER,
    mutationFn: async (post: Post) =>
      await requestReactQueryHelper({
        method: "PUT",
        url: `/post/${post.id}`,
        data: post,
      }),
    onSuccess: (_) => {
      toast.success("Post updated successfully");
      navigate(DASHBOARD_ROUTES.LIST);
    },
  });

  return createPostRequest;
};
