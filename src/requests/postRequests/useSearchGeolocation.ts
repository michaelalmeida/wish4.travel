import { useQuery } from "react-query";
import { REQUEST_ACTIONS } from "../../constants/requests";
import { requestReactQueryHelper } from "../../helpers/reactQuery.helper";
import { Geocoding } from "Models/Post.model";

export const useSearchGeolocation = ({ address }: { address: string }) => {
  return useQuery<Geocoding>({
    queryKey: [REQUEST_ACTIONS.GET_GEOLOCATION, address],
    enabled: !!address,
    staleTime: 0,
    cacheTime: 0,
    queryFn: async () =>
      await requestReactQueryHelper({
        method: "GET",
        url: `${process.env.VITE_GEOCODE_ENDPOINT}json?q=${address}&key=${process.env.VITE_GEOCODE_KEY}`,
      }),
  });
};
