import { useQuery } from "react-query";
import { REQUEST_ACTIONS } from "../../constants/requests";
import { requestReactQueryHelper } from "../../helpers/reactQuery.helper";
import { Post } from "Models/Post.model";

export const useGetPostRequest = ({ postId }: { postId?: string }) => {
  return useQuery<Post>({
    queryKey: [REQUEST_ACTIONS.GET_POST, postId],
    enabled: !!postId,
    staleTime: 0,
    cacheTime: 0,
    queryFn: async () =>
      await requestReactQueryHelper({
        method: "GET",
        url: `/post/${postId}`,
      }),
  });
};
