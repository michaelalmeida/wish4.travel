import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES, DASHBOARD_ROUTES } from "../constants/routes";
import { Home, Login, Create } from "../Screen";
import { MyTrips } from "../Screen/MyTrips";

import { SignUp } from "../Screen/SignUp";
import { Page404 } from "../Screen/Page404";
import { Profile } from "../Screen/Profile";

export const Routes = () => {
  const dashboardRoutes = [
    {
      path: DASHBOARD_ROUTES.CREATE,
      element: <Create />,
    },
    {
      path: DASHBOARD_ROUTES.LIST,
      element: <MyTrips />,
    },
    {
      path: DASHBOARD_ROUTES.PROFILE,
      element: <Profile />,
    },
  ];

  const router = createBrowserRouter([
    {
      path: ROUTES.HOME,
      element: <Home />,
      errorElement: <Page404 />,
    },
    {
      path: ROUTES.LOGIN,
      element: <Login />,
    },
    {
      path: ROUTES.REGISTER,
      element: <SignUp />,
    },
    ...dashboardRoutes,
  ]);

  return <RouterProvider router={router} />;
};
