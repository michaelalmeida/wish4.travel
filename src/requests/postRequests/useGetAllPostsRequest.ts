import { useQuery } from "react-query";
import { REQUEST_ACTIONS } from "../../constants/requests";
import { useUserCookie } from "../../Hooks/useUser";
import { requestReactQueryHelper } from "../../helpers/reactQuery.helper";
import { Post } from "Models/Post.model";

export const useGetAllPostsRequest = () => {
  const { userId } = useUserCookie();

  const getAllPosts = useQuery<Post[]>({
    queryKey: REQUEST_ACTIONS.GET_ALL_USER_POSTS,
    queryFn: async () =>
      await requestReactQueryHelper({
        method: "GET",
        url: `/posts/${userId}`,
      }),
  });

  return getAllPosts;
};
