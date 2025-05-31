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

export const useArchivePostRequest = () => {
  const navigate = useNavigate();

  const archivePostRequest = useMutation<
    Post,
    AxiosError<CustomErrorResponse>,
    string
  >({
    mutationKey: REQUEST_ACTIONS.ARCHIVE_POST,
    mutationFn: async (postId: string) =>
      await requestReactQueryHelper({
        method: "PATCH",
        url: `/post/archive/${postId}`,
      }),
    onSuccess: () => {
      toast.success("Post archived status updated");
      navigate(DASHBOARD_ROUTES.LIST);
    },
    onError: () => {
      toast.error("Failed to update archive status");
    },
  });

  return archivePostRequest;
};
