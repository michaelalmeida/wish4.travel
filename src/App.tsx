import { ConfigProvider } from "antd";
import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../config/translations";
import { MAIN_COLOR } from "./constants/colors";
import GlobalStyle from "./GlobalStyle";
import { UserProvider } from "./Hooks/useUser";
import { Routes } from "./Routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClientProvider, QueryClient } from "react-query";
import { Loading } from "@screen/Loading";

export const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
    },
  });

  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: `${MAIN_COLOR}`,
            },
            components: {
              Button: {
                borderRadius: 5,
              },
              Popover: {
                borderRadius: 20,
              },
              FloatButton: {
                zIndexPopupBase: 1000,
                zIndexBase: 1000,
                zIndexPopup: 1000,
              },
            },
          }}
        >
          <>
            <GlobalStyle />
            <UserProvider>
              <Suspense fallback={<Loading />}>
                <Routes />
              </Suspense>
            </UserProvider>
            <ToastContainer />
          </>
        </ConfigProvider>
      </QueryClientProvider>
    </I18nextProvider>
  );
};
