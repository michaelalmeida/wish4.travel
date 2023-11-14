import { ConfigProvider } from "antd";
import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../config/translations";
import { MAIN_COLOR } from "./constants/colors";
import GlobalStyle from "./GlobalStyle";
import { UserProvider } from "./Hooks/useUser";
import { Routes } from "./Routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClientProvider, QueryClient } from "react-query";

export const App = () => {
  const queryClient = new QueryClient();

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
              <Routes />
            </UserProvider>
            <ToastContainer />
          </>
        </ConfigProvider>
      </QueryClientProvider>
    </I18nextProvider>
  );
};
