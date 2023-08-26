import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "../constants/routes";
import { Home, Login, Calendar } from "../Screen";
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
      path: routes.CALENDAR,
      element: <Calendar />,
    },
    {
      path: routes.QUOTATION,
      element: <Quotation />,
    },
  ]);

  return <RouterProvider router={router} />;
};
