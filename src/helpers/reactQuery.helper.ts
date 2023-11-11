import { AxiosRequestConfig, AxiosError, isAxiosError } from "axios";
import axiosClient from "../../config/server";

export type CustomErrorResponse = {
  message: string;
};
type ReactQueryHelperPropsConfig = AxiosRequestConfig;
type ServerError = { error: string };

export const requestReactQueryHelper = async (
  config: ReactQueryHelperPropsConfig
) => {
  const { method = "GET", url, params, data } = config;

  try {
    const response = await axiosClient({
      method,
      url,
      data,
      params,
      ...config,
    });

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>;

      if (serverError && serverError.response) {
        console.log(typeof serverError.response.data);
        throw new Error(serverError.response.data as any);
      }
    }
    throw new Error("generic error");
  }
};
