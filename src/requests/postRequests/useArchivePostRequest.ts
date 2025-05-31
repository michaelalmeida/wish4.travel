import { useMutation } from "react-query";
import { REQUEST_ACTIONS } from "../../constants/requests";
import {
  requestReactQueryHelper,
  CustomErrorResponse,
} from "../../helpers/reactQuery.helper";
import { AxiosError } from "axios";
import { Post } from "../../Models/Post.model";
import { toast } from "react-toastify";

export const useArchivePostRequest = (onSuccessCallback: () => void) => {
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
      onSuccessCallback();
    },
    onError: () => {
      toast.error("Failed to update archive status");
    },
  });

  return archivePostRequest;
};
