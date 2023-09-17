import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "../constants/routes";
import { Home, Login, Create } from "../Screen";
import { Quotation } from "../Screen/Quotation";

import { SignUp } from "../Screen/SignUp";

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: routes.HOME,
      element: <Home />,
    },
    {
      path: routes.LOGIN,
      element: <Login />,
    },
    {
      path: routes.REGISTER,
      element: <SignUp />,
    },
    {
      path: routes.CREATE,
      element: <Create />,
    },
    {
      path: routes.LIST,
      element: <Quotation />,
    },
  ]);

  return <RouterProvider router={router} />;
};
