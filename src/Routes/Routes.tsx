import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes, DASHBOARD_ROUTES } from "../constants/routes";
import { Home, Login, Create } from "../Screen";
import { MyTrips } from "../Screen/MyTrips";

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
      path: DASHBOARD_ROUTES.CREATE,
      element: <Create />,
    },
    {
      path: DASHBOARD_ROUTES.LIST,
      element: <MyTrips />,
    },
  ]);

  return <RouterProvider router={router} />;
};
