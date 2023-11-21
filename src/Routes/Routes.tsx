import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES, DASHBOARD_ROUTES } from "../constants/routes";

const Home = React.lazy(() => import("../Screen/Home"));
const Login = React.lazy(() => import("../Screen/Login"));
const SignUp = React.lazy(() => import("../Screen/SignUp"));
const Page404 = React.lazy(() => import("../Screen/Page404"));

const MyTrips = React.lazy(() => import("../Screen/MyTrips"));
const Create = React.lazy(() => import("../Screen/Create"));
const Profile = React.lazy(() => import("../Screen/Profile"));

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
    {
      path: DASHBOARD_ROUTES.EDIT_POST,
      element: <Create />,
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
